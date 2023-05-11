import Layout from '../../layouts/Main';
import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import CheckoutItems from '../../components/checkout/items';
import { RootState } from 'store';
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { createRef } from 'react';
import { useForm } from 'react-hook-form';
const generate_code = require('../../utils/generate_string.js')
const  generateString = ((length)=> {
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
})
const CheckoutPage = () => {
  const router = useRouter();
  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return totalPrice;
  })
  const formRef = createRef();
  const { register, handleSubmit, errors,getValues} = useForm();
  const dataInfo = useSelector((state:RootState) => state.userInfoReducer.dataUser);
  const dataCard = useSelector((state:RootState) => state.cart.cartItems);
  const onPayment = async ()=>{
    let token = localStorage.getItem("token");
    const code = generateString(12);
    const shipping_information = getValues();
    let data = {
      order_code : code,
      amount : priceTotal,
      cart : dataCard,
      shipping_information
    }
    console.log('dataaaaaaaaaaa',data)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/user/order-product?view=true`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: `${token}`,
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    router.push({
      pathname: '/payment/[pid,category]',
      query: {name : dataInfo.first_name + ' ' + dataInfo.last_name,total_price : priceTotal,code},
    })
  }
  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Thông tin vận chuyển và thanh toán</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              {/* <div className="checkout__btns">
                <button className="btn btn--rounded btn--yellow">Log in</button>
                <button className="btn btn--rounded btn--border">Sign up</button>
              </div> */}

              <div className="block">
                <h3 className="block__title">Thông tin vận chuyển</h3>
                <form className="form" >
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                    <input
                      className="form__input form__input--sm"
                      placeholder="Tên gọi ( biệt danh )"
                      type="text"
                      name="name"
                      ref={register({
                        required: true,
                        // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    </div>

                    <div className="form__col">
                    <input
                      className="form__input form__input--sm"
                      placeholder="Địa chỉ chi tiết"
                      type="text"
                      name="address"
                      ref={register({
                        required: true,
                        // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                    <input
                      className="form__input form__input--sm"
                      placeholder="Họ"
                      type="text"
                      name="first_name"
                      ref={register({
                        required: true,
                        // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    </div>

                    <div className="form__col">
                    <input
                      className="form__input form__input--sm"
                      placeholder="Thành phố"
                      type="text"
                      name="city"
                      ref={register({
                        required: true,
                        // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                    <input
                      className="form__input form__input--sm"
                      placeholder="Tên"
                      type="text"
                      name="last_name"
                      ref={register({
                        required: true,
                        // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    </div>
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Số điện thoại" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Phương thức thanh toán</h3>
                <ul className="round-options round-options--three">
                  <li className="round-item">
                    <img src="/images/logos/paypal.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/visa.png" alt="Paypal" />
                  </li>
                  {/* <li className="round-item">
                    <img src="/images/logos/mastercard.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/maestro.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/discover.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/ideal-logo.svg" alt="Paypal" />
                  </li> */}
                </ul>
              </div>
{/* 
              <div className="block">
                <h3 className="block__title">Delivery method</h3>
                <ul className="round-options round-options--two">
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/inpost.svg" alt="Paypal" />
                    <p>$20.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/dpd.svg" alt="Paypal" />
                    <p>$12.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/dhl.svg" alt="Paypal" />
                    <p>$15.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/maestro.png" alt="Paypal" />
                    <p>$10.00</p>
                  </li>
                </ul>
              </div> */}
            </div>

            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Your cart</h3>
                <CheckoutItems />

                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>{priceTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VNĐ</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back"><i className="icon-left"></i> Quay lại</a>
            <div className="cart-actions__items-wrapper">
              <a  href="/products"><button type="button" className="btn btn--rounded btn--border">Tiếp tục mua sắm</button></a>
              {dataCard.length>0 && dataInfo && <button type="button" onClick={onPayment} className="btn btn--rounded btn--yellow">Tiếp tục thanh toán</button>}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
};


export default CheckoutPage