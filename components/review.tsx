import React from "react";
import styles from '../styles/Home.module.css'
import { FaRegTrashAlt } from 'react-icons/fa'

const Review = ({ review, deleteReview }: { review: string, deleteReview:() => void}) => {
    return (
        <li className={styles.card}>
            <div className={styles.review}>
                <h1 className={styles.gName}>{review.name}</h1>
                <p className={styles.text}>{review.review}</p>
            </div>
            <button onClick={() => deleteReview(review.id)} className={styles.trash}>{<FaRegTrashAlt />}</button>
        </li>

    )
}

export default Review 