import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar';
import { AiOutlinePlus } from 'react-icons/ai'
import React, { useState, useEffect, use } from 'react';
import Review from '../components/review';
import { addDoc, collection, deleteDoc, onSnapshot, QuerySnapshot, doc } from 'firebase/firestore';
import { db } from '../util/firebase';
import { query } from 'firebase/firestore'

export default function Home() {

    const [reviews, setReviews] = useState([])
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')


    const createReview = async (e: any) => {
        e.preventDefault(e)
        if (input1 === '' || input2 === '') {
            alert('Please fill out all fields')
            return
        }
        await addDoc(collection(db, 'reviews'), {
            name: input1,
            review: input2
        })
        setInput1('')
        setInput2('')
    };

    useEffect(() => {
        const r = query(collection(db, 'reviews'))
        const unsubscribe = onSnapshot(r, (QuerySnapshot) => {
            let reviewArray: string[] = []
            QuerySnapshot.forEach((doc) => {
                reviewArray.push({ ...doc.data(), id: doc.id })
            });
            setReviews(reviewArray)
        })
        return () => unsubscribe
    }, [])

    const deleteReview = async (id) => {
        await deleteDoc(doc(db, 'reviews', id))
    }


    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.navbar}>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.title2}>
                    <h1 className={styles.title}>
                        Reviews
                    </h1>
                </div>

                <div className={styles.form}>
                    <form onSubmit={createReview}>
                        <input value={input1} onChange={(e) => setInput1(e.target.value)} className={styles.input1} type='text' placeholder='Which game?'></input>
                        <input value={input2} onChange={(e) => setInput2(e.target.value)} className={styles.input2} type='text' placeholder='Write your review'></input>
                        <button className={styles.button}><AiOutlinePlus size={20} /></button>
                    </form>
                </div>
                <div className={styles.grid}>
                    <a>
                        {reviews.map((review: string, index) => (
                            <Review key={index} review={review} deleteReview={deleteReview} />
                        ))}
                    </a>
                </div>

            </div>


            <div className='foot'>
                <footer className={styles.footer}>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Made by Bunjee Awoyomi aoa26 and Giles Mitchell gm456{' '}
                    </a>
                </footer>
            </div>

        </div>
    )
}

