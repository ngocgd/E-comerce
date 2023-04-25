import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import ProductsFilter from '../components/products-filter';
import ProductsContent from '../components/products-content';
import { GetServerSideProps } from 'next';
import { ProductTypeList } from 'types';
export interface InfoPayment{
    amount : number,
    user_id : number,
    name : string,
    order_id : number
}
const Payment = (infoPayment :InfoPayment ) => (
  <Layout>
    <Breadcrumb props = 'Payment'/>
    <img  src={`https://img.vietqr.io/image/MB-0865097715-print.png?amount=100000&addInfo=${infoPayment.user_id + ' ' + infoPayment.name + " " + infoPayment.order_id}&accountName=NGO THO NGOC`}/>
    <Footer />
  </Layout>
)
  
export default Payment
  