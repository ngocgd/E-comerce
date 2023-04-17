import ProductsCarousel from './carousel';
import useSwr from 'swr';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from 'store';
import { useEffect } from 'react';
import { ProductTypeList } from 'types';
import { GetServerSideProps } from 'next';

type ProductsCarouselType = {
  products: ProductTypeList[]
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // const pid = query.pid;
  console.log('serversiteeeeeee')
  const val = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/product/get-list-product?view=true`, {
    headers: {
        'Content-Type': 'application/json',
    } 
});
  const dataVal = await val.json();
  const product = dataVal.data;
  return {
    props: {
      product,
    },
  }
}

const ProductsFeatured =  () => {
  const dispatch = useDispatch();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);
  // const val =(async()=>await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/product/get-list-product-web?view=true`, {
  //   headers: {
  //       'Content-Type': 'application/json',
  //   } 
  // }));
  // console.log('datavaaaaaaaaaaaaaaaa',val)
  const kaka = useSwr(`${process.env.NEXT_PUBLIC_API_URL}/admin/product/get-list-product-web`,fetcher);


  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <a href="/products" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured