import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 
import {useDispatch, useSelector}from 'react-redux'
import { actionUpdateUser,actionLoginUser } from 'store/user/actions';
import { RootState } from 'store';
import { useEffect } from 'react';
import { Alert, AlertTitle, Button, Snackbar, Stack } from '@mui/material';
import toast from '../components/toast/toast'
import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

type LoginMail = {
  email: string;
  password: string;
}
const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const [openSucess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const router = useRouter();
  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };
  const handleClickError = () => {
    setOpenError(true);
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };
  const onSubmit = async (data: LoginMail) => {
    const res:any = await dispatch(actionLoginUser(data));
    if(res.code == 200){
      handleClickSuccess();
      router.push('/')
    }else{
      handleClickError();
    }
  };
  const dataInfo = useSelector((state:RootState) => state.userInfoReducer);

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a><i className="icon-left"></i> Back to store</a>
            </Link>
          </div>
          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>
            <p className="form-block__description">Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
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
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="keepSigned" 
                      id="check-signed-in" 
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Keep me signed in</p>
                  </label>
                </div>
                <a href="/forgot-password" className="form__info__forgot-password">Forgot password?</a>
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social fb-btn"><i className="icon-facebook"></i>Facebook</button>
                <button type="button" className="btn-social google-btn"><img src="/images/icons/gmail.svg" alt="gmail" /> Gmail</button>
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign in</button>

              <p className="form__signup-link">Not a member yet? <a href="/register">Sign up</a></p>
            </form>
          </div>

        </div>
        <div>
        <Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={openSucess} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Login sucessfull!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Login failed!
        </Alert>
      </Snackbar>
    </Stack>
        </div>
      </section>
    </Layout>
  )
}
  
export default LoginPage
  