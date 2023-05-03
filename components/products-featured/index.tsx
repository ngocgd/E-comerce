import ProductsCarousel from './carousel';
import useSwr from 'swr';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from 'store';
import { useEffect, useState } from 'react';
import { ProductTypeList } from 'types';
import { GetServerSideProps } from 'next';
import { actionGetListProduct } from 'store/product/actions';

type ProductsCarouselType = {
  products: ProductTypeList[]
}
// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   // const pid = query.pid;
//   console.log('serversiteeeeeee')
//   const val = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/product/get-list-product?view=true`, {
//     headers: {
//         'Content-Type': 'application/json',
//     } 
// });
//   const dataVal = await val.json();
//   const product = dataVal.data;
//   return {
//     props: {
//       product,
//     },
//   }
// }
const ProductsFeatured =  () => {
  const dispatch = useDispatch();
  const [dataSlide, setDataSile] = useState([])
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);
  // const val =(async()=>await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/product/get-list-product-web?view=true`, {
  //   headers: {
  //       'Content-Type': 'application/json',
  //   } 
  // }));
  // console.log('datavaaaaaaaaaaaaaaaa',val)
  useEffect(()=>{
    console.log('useEffect')
    getListImageOffice();
  },[]);
  const getListImageOffice = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/product/get-list-product-hot?view=true`, {
        headers: {
            'Content-Type': 'application/json',
        } 
      });
    const val = await data.json();
    setDataSile(val.data)
  };


  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Lựa chọn cho bạn</h3>
          <a href="/products" className="btn btn--rounded btn--border">Xem tất cả</a>
        </header>

        <ProductsCarousel products={dataSlide} />
      </div>
    </section>
  )
};

export default ProductsFeatured