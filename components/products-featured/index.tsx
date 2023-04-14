import ProductsCarousel from './carousel';
import useSwr from 'swr';
import {actionGetListPopup, actionSaveListPopup} from '../../store/category/actions'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from 'store';
import { useEffect } from 'react';
const ProductsFeatured =  () => {
  const dispatch = useDispatch();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);
  useEffect(() => {
    (async () => {
    //     const data_config = await dispatch(actionGetListPopup({ page: 1 }));
    // console.log('dataconfig',data_config)

    })()
}, [dispatch])
  const todos = useSelector((state:RootState) => state.categoryReducer);
  console.log('dataaaaaaaaaaaa',todos)
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