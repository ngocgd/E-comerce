import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import ChatBot from '../components/chatbot';
// import ChatBox = React.lazy(()=> import {  } from "module";)
import Logo from '../assets/icons/logo';
import { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoginByToken } from 'store/user/actions';
import { actionGetListProduct } from 'store/product/actions';
import { RootState } from 'store';
import { ProductTypeList } from 'types';
import { GetServerSideProps } from 'next';
import React from 'react';
type ProductsCarouselType = {
  products: ProductTypeList[]
}
type hotPost = {
  id :number,
  title : string,
  status : number,
  hot : number,
  showdate : Date,
  image : string
}
const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hotPost, setHotPost] = useState([]);
  useEffect(() => {
    getListImageOffice();
  }, []);
  const getListImageOffice = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/app/post/get-news-hot?view=true`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const val = await data.json();
    setHotPost(val.data)
  };
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(actionGetListProduct({ page: 1 }));
    })()
  }, [dispatch])
  return (
    <Layout>
      <PageIntro />
      <div className='popup-box'>

        <div>
          <button onClick={togglePopup}><label className="chat-btn" htmlFor="check" style={{ backgroundImage: 'url(/images/chatbot.svg)' }} /></button>
        </div>
      </div>

      {isOpen && <ChatBot
      // handleClose={togglePopup}
      />}
      <section className="featured">
        <div className="container">
          {
            hotPost.map((it:hotPost,index) => (
              <>
                <article style={{ backgroundImage: `url(${it?.image})` }} className={index===0?'featured-item featured-item-large':index===1?'featured-item featured-item-small-first':'featured-item featured-item-small'}>
                  <div className="featured-item__content">
                    <h3>{it?.title}</h3>
                    <a href="#" className="btn btn--rounded">Show Collection</a>
                  </div>
                </article>
              </>
            ))
          }
          {/* <article style={{ backgroundImage: 'url(/images/featured-1.jpg)' }} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>New arrivals are now in!</h3>
              <a href="#" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>

          <article style={{ backgroundImage: 'url(/images/featured-2.jpg)' }} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Basic t-shirts $29,99</h3>
              <a href="#" className="btn btn--rounded">More details</a>
            </div>
          </article>

          <article style={{ backgroundImage: 'url(/images/featured-3.jpg)' }} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Sale this summer</h3>
              <a href="#" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article> */}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>All purchases over $199 are eligible for free shipping via USPS First Class Mail.</p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Easy Payments</h4>
                <p>All payments are processed instantly over a secure payment protocol.</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Money-Back Guarantee</h4>
                <p>If an item arrived damaged or you've changed your mind, you can send it
                  back for a full refund.</p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Finest Quality</h4>
                <p>Designed to last, each of our products has been crafted with the finest materials.</p>
              </div>
            </li>
          </ul>
        </div>
        {/* <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/01fc21b2-2ffa-4d2a-8ad5-c87492ab990f"></iframe> */}
      </section>
      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage