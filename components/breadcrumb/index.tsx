const Breadcrumb = (props:any) => {
  return (
    <section className="breadcrumb">
    <div className="container">
      <ul className="breadcrumb-list">
        <li><a href="#"><i className="icon-home"></i></a></li>
        <li>{props.props}</li>
      </ul>
    </div>
  </section>
  )
};


export default Breadcrumb