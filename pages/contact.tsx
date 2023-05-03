
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
import { Alert, Snackbar, Stack } from '@mui/material';

const Contact = () => {
  const [error,setError] = React.useState('Register Failed')
  const [openSucess, setOpenSuccess] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [openError, setOpenError] = React.useState(false);
  const [textArea, setTextArea] = React.useState('')
  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };
  const handleClickError = (message) => {
    console.log('aaaaaaaaaaa')
    setOpenError(true);
    console.log('messss',message)
    setError(message)
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };
  const dispatch = useDispatch();
  const onSubmit = async (data: any) => {
    console.log('DDDDDDDDDDDDD')
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/request/update-contact-request?view=true`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    console.log("ressssss",res)
    if (res.status == 200) {
      handleClickSuccess();
      router.push('/')
    } else {
      console.log('resMessage',res.message)
      handleClickError(res.message);
    }
  };
  const setValueArea = async (value: any) => {
    setTextArea(value.target.value)
  }
  return (
    <Layout>
      <Breadcrumb props='Contact' />
      <section className="contact-page">
        <Stack spacing={2} sx={{ width: '100%' }}>
          {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
          <Snackbar open={openSucess} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Add contact sucessfull!
            </Alert>
          </Snackbar>
          <Snackbar open={openError} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          </Snackbar>
        </Stack>
        <div>
          <header className="u-clearfix u-header u-header" id="sec-5653"><div className="u-clearfix u-sheet u-sheet-1" /></header>
          <section className="u-clearfix u-image u-section-1" id="sec-32e5" data-image-width={2250} data-image-height={1500}>
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
              <div className="u-align-center u-form u-radius-50 u-white u-form-1">
                <form onSubmit={handleSubmit(onSubmit)} className="u-clearfix u-form-spacing-25 u-form-vertical u-inner-form" name="form" style={{ padding: '30px' }}>
                  <h3 className="u-align-center u-custom-font u-font-ubuntu u-form-group u-form-text u-label-top u-text u-text-1"> Liên hệ</h3>
                  <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top">
                    <label htmlFor="name-66b3" className="u-label">Tên</label>
                    <input
                      className="u-border-none u-grey-5 u-input u-input-rectangle u-radius-20"
                      placeholder="Name"
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
                      placeholder="Email"
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
                    <label htmlFor="name-66b3" className="u-label">Số điện thoại</label>
                    <input
                      className="u-border-none u-grey-5 u-input u-input-rectangle u-radius-20"
                      placeholder="Phone"
                      type="number"
                      name="mobile"
                      ref={register({
                        required: true,
                        pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                      })}
                    />

                    {errors.mobile && errors.mobile.type === 'required' &&
                      <p className="message message--error">This field is required</p>
                    }
                    {errors.mobile && errors.mobile.type === 'pattern' &&
                      <p className="message message--error">Please write a valid phone</p>
                    }
                  </div>
                  <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top">
                    <label htmlFor="name-66b3" className="u-label">Địa chỉ</label>
                    <input
                      className="u-border-none u-grey-5 u-input u-input-rectangle u-radius-20"
                      placeholder="Adress"
                      type="text"
                      name="address"
                      ref={register({
                        required: true,
                        // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />

                    {errors.address && errors.address.type === 'required' &&
                      <p className="message message--error">This field is required</p>
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
                    <label htmlFor="message-66b3" className="u-label">Tin nhắn</label>
                    <textarea placeholder="Enter your message" value={textArea} onChange={setValueArea} rows={4} cols={50} id="message-66b3" name="message" className="u-border-none u-grey-5 u-input u-input-rectangle u-radius-20" required defaultValue={""} />
                  </div>
                  <div className="u-align-center u-form-group u-form-submit u-label-top">
                    <button type="submit" className="u-border-none u-btn u-btn-submit u-button-style u-palette-4-base u-radius-20 u-btn-1">Gửi</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-686b"><div className="u-clearfix u-sheet u-sheet-1">
            {/* <p className="u-small-text u-text u-text-variant u-text-1">Sample text. Click to select the Text Element.</p> */}
          </div></footer>
          {/* <section className="u-backlink u-clearfix u-grey-80">
            <a className="u-link" href="https://nicepage.com/website-templates" target="_blank">
              <span>Web Templates</span>
            </a>
            <p className="u-text">
              <span>created with</span>
            </p>
            <a className="u-link" href="https://nicepage.me" target="_blank">
              <span>Best Website Builder</span>
            </a>.
          </section> */}
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default Contact
