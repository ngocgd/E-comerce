import { useState } from 'react';
import List from './list';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { RootState } from 'store';
import { actionGetListProduct } from 'store/product/actions';

const ProductsContent = () => {
  const dispatch = useDispatch();
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  const product = useSelector((state:RootState) => state.productReducer.dataProduct);
  const onChangePage = async (_, page) => {
    await dispatch(actionGetListProduct({ page}));
}
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Jewelry <span>({product.total})</span></h2>
        <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-filters"></i></button>
        <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
          <div className="products__filter__select">
            <h4>Show products: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <List />
      <div className="mt--20 rowx-center">
        {product?.paging?.total > product?.paging?.limit && <div className="mt--20 rowx-center">
          <Pagination
            count={product?.paging?.count} //total
            page={product?.paging?.page} //current page
            variant="outlined" shape="rounded" showFirstButton showLastButton
            onChange={(event, page) => onChangePage(event, page)}
          />
        </div>}
      </div>
    </section>
  );
};
  
export default ProductsContent
  