import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Tedaa Shop' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;
  const dataSpin = useSelector((state: RootState) => state.homeReducer.spin);
  console.log('spijnnnnnnnnnnnnnnnnn', dataSpin)
  return (
    <div className="app-main">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Spin
        spinning={dataSpin}
        wrapperClassName='tmar-spin-container'
      // indicator={<img src='images/tmar-loading.gif' alt='' style={{ width: '70px', height: '70px' }} />}
      >

        <main className={(pathname !== '/' ? 'main-page' : '')}>
          {children}
        </main>
      </Spin>
    </div>
  )
}

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
