import { css } from '@emotion/react';
import type { NextPage } from 'next';

const HomeCSS = css({
  color: 'red',
});

const Home: NextPage = () => {
  return <div css={HomeCSS}>welcome to Next.js</div>;
};

export default Home;
