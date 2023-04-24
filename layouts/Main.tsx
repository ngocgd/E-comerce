import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Betaa Shop' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="app-main">
      <Head>
        <title>{ title }</title>
      </Head>

      <Header />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
