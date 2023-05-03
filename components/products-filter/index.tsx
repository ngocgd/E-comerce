import { useEffect, useState } from 'react';
import Checkbox from './form-builder/checkbox';
import CheckboxColor from './form-builder/checkbox-color';
import Slider from 'rc-slider';

// data
import productsTypes from './../../utils/data/products-types';
import productsColors from './../../utils/data/products-colors';
import productsSizes from './../../utils/data/products-sizes';
import { useDispatch } from 'react-redux';
import { actionGetListProduct } from 'store/product/actions';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [dataCheckBox,setDataCheckBox] = useState([]);
  const [dataRange,setDataRange] = useState([0,100]);
  const [productType,setProductType] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    getListProductCategory();
  }, []);
  const getListProductCategory = async () => {
      const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/product-category/get-list-product-category-apps?view=true`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const val = await data.json();
    setProductType(val.data.rows)
  };
  
  const addQueryParams = async () => {
    const res:any = await dispatch(actionGetListProduct({categories : dataCheckBox,dataRange}));
  }
  const setDataCheck = (event:any)=>{
    const  removeElement= ((array:Array<string>, elem:string)=> {
      var index = array.indexOf(elem);
      if (index > -1) {
          array.splice(index, 1);
      }
    })
    const val:string = event.target.id
    if(!dataCheckBox.includes(val)){
      dataCheckBox.push(val);
    }else{
      removeElement(dataCheckBox,val);
    }
  }
  const changeDataRange = (event:any) => {
    setDataRange(event);
    addQueryParams();
  };
  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button type="button" 
        onClick={() => setFiltersOpen(!filtersOpen)} 
        className={`products-filter__menu-btn ${filtersOpen ? 'products-filter__menu-btn--active' : ''}`}>
          Add Filter <i className="icon-down-open"></i>
      </button>
      
      <div className={`products-filter__wrapper ${filtersOpen ? 'products-filter__wrapper--open' : ''}`}>
        <div className="products-filter__block">
          <button type="button">Danh mục</button>
          <div className="products-filter__block__content">
            {productType.map(type => (
              <Checkbox 
                key={type.id} 
                name={type.slug}
                label={type.name} 
                onChange={setDataCheck}
              />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Khuyến mãi</button>
          <div className="products-filter__block__content">
            <Range
             min={0} 
             max={100} 
             defaultValue={[3, 10]} 
             tipFormatter={value => `${value}%`} 
             onChange={changeDataRange}
             />
          </div>
        </div>
        
        {/* <div className="products-filter__block">
          <button type="button">Size</button>
          <div className="products-filter__block__content checkbox-square-wrapper">
            {productsSizes.map(type => (
              <Checkbox 
                type="square" 
                key={type.id} 
                name="product-size" 
                label={type.label} />
            ))}
          </div>
        </div> */}
        
        {/* <div className="products-filter__block">
          <button type="button">Color</button>
          <div className="products-filter__block__content">
            <div className="checkbox-color-wrapper">
              {productsColors.map(type => (
                <CheckboxColor key={type.id} valueName={type.color} name="product-color" color={type.color} />
              ))}
            </div>
          </div>
        </div> */}

        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Apply</button>
      </div>
    </form>
  )
}
  
export default ProductsFilter
  