type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Thông tin chi tiết products</h4>
        <p>Sản phẩm là sự kết hợp tinh xảo giữa tay nghề người thợ thủ công và những viên đá quý</p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Thông tin chi tiết bộ sưu tập</h4>
        <p>Bộ sưu tập lấy cảm hứng từ mô-típ chần quả trám, biểu tượng của Thương hiệu từ năm 1955. Khám phá các thiết kế bằng VÀNG BEIGE, vàng vàng hoặc vàng trắng, đính hoặc không đính kim cương</p>
      </div>
    </section>
  );
};
  
export default Description;
    