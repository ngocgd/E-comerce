import Logo from '../../assets/icons/logo';

const Footer = () => {
  const shop = ` Shop`;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6> <Logo /> <span>Tedaa  -</span>{shop}</h6>
            <p>This is Tedaa Shop.Co-founder is _ntNocj_</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Mua sắm online</li>
              <li><a href="#">Trạng thái đơn hàng</a></li>
              <li><a href="#">Vận chuyển</a></li>
              <li><a href="#">Trả hàng</a></li>
              <li><a href="#">Lựa chọn thanh toán</a></li>
              <li><a href="#">Liên hệ với chúng tôi</a></li>
            </ul>
            <ul>
              <li>Thông tin</li>
              <li><a href="#">Thẻ quà tặng</a></li>
              <li><a href="#">Tìm kiếm thông tin shop</a></li>
              <li><a href="#">Thư mới</a></li>
              <li><a href="#">Trở thành đối tác</a></li>
              <li><a href="#">Khiếu nại</a></li>
            </ul>
            <ul>
              <li>Liên hệ</li>
              <li><a href="#">ngocngo12a@gmail.com</a></li>
              <li><a href="#">Hotline: 0865097715</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY _ntNoc_ - Tedaa Shop 2023</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer