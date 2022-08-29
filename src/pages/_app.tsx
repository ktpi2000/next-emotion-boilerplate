import type { AppProps } from 'next/app';
import emotionReset from 'emotion-reset';
import { css, Global } from '@emotion/react';
import { globalStyle } from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Global styles={css(emotionReset, globalStyle)} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
