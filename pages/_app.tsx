import AppState from '../context/AppState';
import type { AppProps } from 'next/app';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  );
}
export default MyApp
