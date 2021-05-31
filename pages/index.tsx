import Head from 'next/head';
import styles from '@styles/Home.module.css';

import * as THREE from 'three'
import Scene from '@components/scene'

export default function Home() {
  return (
    <div className={styles.container}>
      <Scene /> 
    </div>
  );
}