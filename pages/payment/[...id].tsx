import Layout from '../../layouts/Main';
import Footer from '../../components/footer';
import Breadcrumb from '../../components/breadcrumb';
import { GetServerSideProps } from 'next';
import { ProductTypeList } from 'types';
export interface InfoPayment{
    name : string,
    code : string,
    total_price : number,
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log('->>>>>>>>>>',query)
  return {
    props: {
      query,
    },
  }
}
const Payment = ({query} :InfoPayment ) => (
  <Layout>
    <Breadcrumb props = 'Payment'/>
    <img className='img-qrcode'  src={`https://img.vietqr.io/image/MB-0865097715-print.png?amount=${query.total_price}&addInfo=${query.name + " " + query.code}&accountName=NGO THO NGOC`}/>
    <Footer />
  </Layout>
)
  
export default Payment
  