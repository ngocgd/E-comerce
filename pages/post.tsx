import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import ProductsFilter from '../components/products-filter';
import ProductsContent from '../components/products-content';
import { GetServerSideProps } from 'next';
import { ProductTypeList } from 'types';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Post = () => {
    const [hotPost, setHotPost] = useState([]);
    useEffect(() => {
        getListPost();
      }, []);
    const getListPost = async()=>{
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/app/post/get-news-hot?view=true`, {
            headers: {
              'Content-Type': 'application/json',
            }
          });
          const val = await data.json();
          setHotPost(val.data);
    }
    return (
  <Layout>
    <Breadcrumb props = 'All Hot Post'/>
    <section className="u-align-center u-clearfix u-section-1" id="carousel_57a9">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-blog u-blog-1">
          <div className="u-repeater u-repeater-1">
            {hotPost?hotPost.map((it)=>(
                <div>
                    <div className="u-blog-post u-repeater-item">
              <div className="u-container-layout u-similar-container u-valign-bottom-xs u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-1">
                <a className="u-post-header-link" href={`post/${it?.seo_url}`}>
                  <img src={it?.image} alt="" className="u-blog-control u-image u-image-default u-image-1"/>
                </a>
                <h2 className="u-blog-control u-text u-text-1">
                  <a className="u-post-header-link" href={`post/${it?.seo_url}`}>{it?.title}</a>
                </h2>
                <div className="u-blog-control u-post-content u-text u-text-2 fr-view">{it?.seo_description}</div>
                <div className="u-blog-control u-metadata u-metadata-1">
                  <span className="u-meta-date u-meta-icon">{it?.show_date}</span>
                </div>
                <a href="blog/post-5.html" className="u-blog-control u-border-2 u-border-grey-dark-1 u-btn u-btn-rectangle u-button-style u-none u-btn-1">Read More</a>
              </div>
            </div>
                </div>
            )) 
            :(<></>)}
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </Layout>
 )
}
  
export default Post
  