
import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import ProductsFilter from '../components/products-filter';
import ProductsContent from '../components/products-content';
import { GetServerSideProps } from 'next';
import { ProductTypeList } from 'types';
import { Session } from 'inspector';
import { useDispatch } from 'react-redux';
import React from 'react';
import router from 'next/router';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [openSucess, setOpenSuccess] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [textArea, setTextArea] = React.useState('')
  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };
  const dispatch = useDispatch();
  const onSubmit = async (data: any) => {
    console.log('DDDDDDDDDDDDD')
    console.log('dataaaaaa', data)
    // const res:any = await dispatch(actionLoginUser(data));
    // if(res.code == 200){
    // //   handleClickSuccess();
    //   router.push('/')
    // }else{
    // //   handleClickError();
    // }
  };
  const setValueArea = async (value:any)=>{
    setTextArea(value.target.value)
  }
  return (
    <Layout>
      <Breadcrumb props='All Product' />
      <section className="contact-page">
        <div>
          <header className="u-clearfix u-header u-header" id="sec-5653"><div className="u-clearfix u-sheet u-sheet-1" /></header>
          <section className="u-clearfix u-image u-section-1" id="sec-32e5" data-image-width={2250} data-image-height={1500}>
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
              <div className="u-align-center u-form u-radius-50 u-white u-form-1">
                <form onSubmit={handleSubmit(onSubmit)} className="u-clearfix u-form-spacing-25 u-form-vertical u-inner-form" name="form" style={{ padding: '30px' }}>
                  <h3 className="u-align-center u-custom-font u-font-ubuntu u-form-group u-form-text u-label-top u-text u-text-1"> Contact Us</h3>
                  <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top">
                    <label htmlFor="name-66b3" className="u-label">Name</label>
                    <input
                      className="u-border-none u-grey-5 u-input u-input-rectangle u-radius-20"
                      placeholder="name"
                      type="text"
                      name="name"
                      ref={register({
                        required: true,
                        // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />

                    {errors.email && errors.email.type === 'required' &&
                      <p className="message message--error">This field is required</p>
                    }
                  </div>
                  <div className="u-form-email u-form-group u-form-partition-factor-2 u-label-top">
                    <label htmlFor="email-66b3" className="u-label">Email</label>
                    {errors.email && errors.email.type === 'pattern' &&
                      <p className="message message--error">Please write a valid email</p>
                    }
                    <input
                      className="u-border-none u-grey-5 u-input u-input-rectangle u-radius-20"
                      placeholder="email"
                      type="text"
                      name="email"
                      ref={register({
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />

                    {errors.email && errors.email.type === 'required' &&
                      <p className="message message--error">This field is required</p>
                    }
                    {errors.email && errors.email.type === 'pattern' &&
                      <p className="message message--error">Please write a valid email</p>
                    }

                  </div>
                  <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top">
                    <label htmlFor="name-66b3" className="u-label">Phone</label>
                    <input
                      className="u-border-none u-grey-5 u-input u-input-rectangle u-radius-20"
                      placeholder="name"
                      type="number"
                      name="phone"
                      ref={register({
                        required: true,
                        pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                      })}
                    />

                    {errors.phone && errors.phone.type === 'required' &&
                      <p className="message message--error">This field is required</p>
                    }
                    {errors.phone && errors.phone.type === 'pattern' &&
                      <p className="message message--error">Please write a valid phone</p>
                    }
                  </div>
                  <input
                    type='hidden'
                    name='description'
                    value={textArea}
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.description && errors.description.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
                  <div className="u-form-group u-form-message u-label-top">
                    <label htmlFor="message-66b3" className="u-label">Message</label>
                    <textarea placeholder="Enter your message" value={textArea} onChange={setValueArea} rows={4} cols={50} id="message-66b3" name="message" className="u-border-none u-grey-5 u-input u-input-rectangle u-radius-20" required defaultValue={""} />
                  </div>
                  <div className="u-align-center u-form-group u-form-submit u-label-top">
                    <button type="submit" className="u-border-none u-btn u-btn-submit u-button-style u-palette-4-base u-radius-20 u-btn-1">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-686b"><div className="u-clearfix u-sheet u-sheet-1">
            <p className="u-small-text u-text u-text-variant u-text-1">Sample text. Click to select the Text Element.</p>
          </div></footer>
          <section className="u-backlink u-clearfix u-grey-80">
            <a className="u-link" href="https://nicepage.com/website-templates" target="_blank">
              <span>Web Templates</span>
            </a>
            <p className="u-text">
              <span>created with</span>
            </p>
            <a className="u-link" href="https://nicepage.me" target="_blank">
              <span>Best Website Builder</span>
            </a>.
          </section>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default Contact
