import { useState } from 'react';
import Rater from 'react-rater';
import { PunctuationType } from 'types';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { actionAddOpinion, actionLoginUser } from 'store/user/actions';
import { RootState } from 'store';
import { Alert, Snackbar, Stack } from '@mui/material';
type addOpinion = {
  point: number;
  description: string;
  product_id : number;
}
const Punctuation = ({ votes, punctuation, countOpinions,product }: PunctuationType) => { 
  const percentageBar = (count: number) => {
    return (count*100)/countOpinions;
  } 
  const dataInfo = useSelector((state:RootState) => state.userInfoReducer);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [rating, setRating] = useState(0);
  const [textArea, setTextArea] = useState('');
  const [hover, setHover] = useState(0);

  const [addOpinion, setAddOpinion] = useState(false);
  const changeOpinion = ((value:boolean)=>{
    setAddOpinion(value);
  })
  const [openSucess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const setValueArea = async (value:any)=>{
    setTextArea(value.target.value)
  }
  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };
  const handleClickError = () => {
    setOpenError(true);
  };
  const onSubmit = async (data: addOpinion) => {
    data.product_id = Number(product.id);
    const res:any = await dispatch(actionAddOpinion(data));
    if(res.code == 200){
      handleClickSuccess();
      setAddOpinion(false);
    }else{
      handleClickError();
    }
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };
  return (
    <section className="product-punctuation">
      <div className="product-punctuation__values">
        <h3>{punctuation?(punctuation).toFixed(2):0}</h3>
        <Rater total={5} interactive={false} rating={punctuation} />
        <p><i className="icon-avatar"></i>{countOpinions} người nhận xét</p>
      </div>
      
      <div className="product-punctuation__rates">
        <ul className="punctuations-lists">
          {votes.map((vote) => (
            <li key={vote.count} className="punctuation-item">
              <Rater total={1} interactive={false} rating={1} />
              <span>{vote.value}</span>
              <div className="punctuation-item__bar">
                <div style={{ width: percentageBar(vote.count)+'%' }} className="punctuation-item__bar__current"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {dataInfo.dataUser && <div className="punctuation-btn-wrapper">
        <button type="button" className="btn btn--rounded btn--yellow" onClick={()=>changeOpinion(!addOpinion)}>Add opinion</button>
      </div>}
      <div>
      {dataInfo.dataUser && addOpinion === true && [...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      { dataInfo.dataUser && addOpinion === true && 
      <form className="form">
              <div className="form__input-row">
                <textarea 
                  className="form__inputt" 
                  placeholder="Đánh giá" 
                  name="description"
                  onChange={setValueArea}
                />
              </div>
            </form>
      }
      { dataInfo.dataUser && addOpinion === true && 
      <form className="form"  onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input
                type='hidden'
                name='point'
                value={rating}
                ref={register({
                  required: true,
                })}
                />
                 {errors.point && errors.point.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
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
              </div>
              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Submit</button>
            </form>
      }
      
      </div>
      <Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={openSucess} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Add opinion successfull!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
         Add opinion failed!
        </Alert>
      </Snackbar>
    </Stack>
    </section>
  );
};
  
export default Punctuation;
    