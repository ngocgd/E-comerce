import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/BannerHome.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Khuyến mại vào mùa này</h2>
                {/* <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/banner1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Khuyến mại vào tháng tới</h2>
                {/* <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Miễn phí giao hàng</h4>
                <p>Với đơn hàng trên 1,000,000 VNĐ</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% phản hồi tốt từ khách hàng</h4>
                <p>Luôn lắng nghe ý kiến của khách hàng để hoàn thiện mỗi ngày</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Đảm bảo nguồn gốc</h4>
                <p>Bảo hành hoàn tiền 30 ngày đổi trả cho sản phẩm của shop</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro