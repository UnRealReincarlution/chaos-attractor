import Head from 'next/head';
import styles from '@styles/Home.module.css';

import * as THREE from 'three'
import Scene from '@components/scene'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <p>This is an interactive example of the Lorenz Model, simulated in real time.</p>
        <p>Learn more <a href="https://en.wikipedia.org/wiki/Lorenz_system">here</a></p>
      </div>

      <div className={styles.mainTitle}>
        <h1>LORENZ <br /> ATTRACTOR</h1>
      </div>
      
      <div className={styles.sceneBackground}>
        <Scene /> 
      </div>
      
    </div>
  );
}