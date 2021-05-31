import { AppProps } from 'next/app';
import '@styles/global.css';

import * as THREE from 'three'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}