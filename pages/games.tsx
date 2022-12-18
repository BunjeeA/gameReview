import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar';

export default function Home() {
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
                        Games
                    </h1>
                </div>
                <div className={styles.gameLayout}>
                    <div className={styles.grid}>
                        <a href="https://freepacman.org/" className={styles.card}>
                            <h2>Pac-Man &rarr;</h2>
                            <p>Play PAC-MAN, the retro arcade game you know and love! Featuring new modes, mazes, power-ups, and more! </p>
                        </a>
                        <a href="https://www.freetetris.org/game.php" className={styles.card}>
                            <h2>Tetris &rarr;</h2>
                            <p>Welcome to TETRIS®, the official mobile app for the world's favorite puzzle game.</p>
                        </a>
                        <a href="https://pokemongolive.com/?hl=en" className={styles.card}>
                            <h2>Pokemon Go &rarr;</h2>
                            <p>Join Trainers around the world and play Pokémon GO together in new and exciting ways.
                                With Pokémon GO, you'll discover Pokémon in a whole new world—your own!</p>
                        </a>
                        <a href="https://www.angrybirds.com/play/" className={styles.card}>
                            <h2>Angry Birds &rarr;</h2>
                            <p>Join an all-new Angry Birds game full of fun puzzles and delightful destruction! 
                                Use the slingshot to blast blocks as you adventure through fantastic worlds </p>
                        </a>
                        <a href="https://www.rockstargames.com/gta-v" className={styles.card}>
                            <h2>GTA V &rarr;</h2>
                            <p>Grand Theft Auto V blends storytelling and gameplay 
                                in new ways as players repeatedly jump in and out of the 
                                lives of the game's three lead characters, playing all sides of
                                 the game's interwoven story.</p>
                        </a>
                    </div>
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