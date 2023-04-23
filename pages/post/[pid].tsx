import { GetServerSideProps } from 'next'

import { useState } from 'react';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import Reviews from '../../components/product-single/reviews';
import { server } from '../../utils/server'; 

// types
import { ProductType } from 'types';
import { useDispatch } from 'react-redux';
import { actionGetDetailProduct } from 'store/product/actions';

type ProductPageType = {
  product: ProductType;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const val = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/app/post/${pid}?view=true`, {
    headers: {
        'Content-Type': 'application/json',
    } 
});
  const dataVal = await val.json();
  const post = dataVal.data[0];
  return {
    props: {
      post,
    },
  }
}

const Product = ({ post }: any) => {
  const [showBlock, setShowBlock] = useState('description');
  return (
    <Layout>
      <Breadcrumb props = 'Detail post' />
      <div className='post'>
                <div dangerouslySetInnerHTML={{ __html: post.html_content }} />
              </div>
      <Footer />
    </Layout>
  );
}

export default Product
