import useSwr from 'swr';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetListProduct } from 'store/product/actions';
import { useEffect } from 'react';
import { RootState } from 'store';
import { actionLoginByToken } from 'store/user/actions';

const ProductsContent = () => {
  const dispatch = useDispatch();
   useEffect(() => {
    (async () => {
        await dispatch(actionGetListProduct({ page: 1 }));
    })()
  }, [dispatch])
  const product = useSelector((state:RootState) => state.productReducer);
  // if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!product?.dataProduct?.rows && 
        <ProductsLoading />
      }

      {product?.dataProduct?.rows &&
        <section className="products-list">
          {product?.dataProduct?.rows.map((item: ProductTypeList)  => (
            <ProductItem 
              id={item.id} 
              name={item.name}  
              price={item.price}
              discount={item.discount}
              current_price={item.current_price}
              key={item.id}
              images={item.images} 
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent