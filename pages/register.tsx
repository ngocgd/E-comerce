import { useForm } from 'react-hook-form';
import Layout from '../layouts/Main';
import Link from 'next/link';
import {actionUpdateUser}  from '../store/user/actions.js'
import { postData } from 'utils/services';
import {useDispatch}from 'react-redux'
import React from 'react';
import { useRouter } from 'next/router';
import { Alert, Snackbar, Stack } from '@mui/material';
type register = {
  first_name :string,
  last_name :string,
  email :string,
  password : string
}
const RegisterPage = () => {
  const [openSucess, setOpenSuccess] = React.useState(false);
  const [error,setError] = React.useState('Register failed')
  const [openError, setOpenError] = React.useState(false);
  const dispatch = useDispatch();
  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };
  const handleClickError = (message) => {
    setOpenError(true);
    setError(message);
  };
  const router = useRouter();
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data: register) => {
    const res = await dispatch(actionUpdateUser(data));
    if(res.code == 200){
      handleClickSuccess();
      router.push('/')
    }else{
      handleClickError(res.message);
    }
  };
  return(
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <a><i className="icon-left"></i> Back to store</a>
          </Link>
        </div>

        <div className="form-block">
           
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__input-row">
              <input 
              className="form__input" 
              placeholder="First Name" 
              type="text" 
              name='first_name'
              ref={register({
                required: true,
                // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              />
              {errors.first_name && errors.first_name.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }

                {errors.first_name && errors.first_name.type === 'pattern' && 
                  <p className="message message--error">Please write a valid email</p>
                }
            </div>
            
            <div className="form__input-row">
              <input className="form__input" 
              placeholder="Last Name" 
              type="text" 
              name="last_name"
              ref={register({
                required: true,
                // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              />
              {errors.first_name && errors.first_name.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
            </div>
            
            <div className="form__input-row">
              <input 
              className="form__input" 
              placeholder="Email" 
              type="text"
              name='email'
              ref={register({
                required: true,
                // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              />
              {errors.first_name && errors.first_name.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
            </div>
            
            <div className="form__input-row">
              <input 
              className="form__input" 
              type="Password" 
              placeholder="Password" 
              name='password' 
              ref={register({
                required: true,
                // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              />
              {errors.first_name && errors.first_name.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check"></span>
                    <p>I agree to the Google Terms of Service and Privacy Policy</p>
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign up</button>

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Are you already a member?</a>
              </Link>
            </p>
          </form>
        </div>

      </div>
      <Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={openSucess} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Register sucessfull!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
         {error}
        </Alert>
      </Snackbar>
    </Stack>
    </section>
  </Layout>
)
}
  
export default RegisterPage
  