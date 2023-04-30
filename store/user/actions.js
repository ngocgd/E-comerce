import { fetchApi } from "../../app/lib/api";
import { Types } from "./types";
// import { actionLoading } from "../home/actions";
// import { checkErrorCode } from "../auth/actions";
import { LIMIT_PAGE, LIMIT_PAGE_MAX } from "../../app/lib/commom";

export const actionUpdateUser = (payload) => async (dispatch) => {
  try {
    // dispatch(actionLoading(true));
    let response = await fetchApi(
      `/admin/user/register-user`,
      "post",
      payload
    );
    console.log(response)
    // if (response.code !== 200) {
    //   dispatch(actionLoading(false));
    //   return checkErrorCode(response?.code, response?.message);
    // }
    // dispatch(actionLoading(false));
    return response;
  } catch (error) {
    // alert(error || error?.message);
  }
};
export const actionAddOpinion = (payload) => async (dispatch) => {
  try {
    // dispatch(actionLoading(true));
    let response = await fetchApi(
      `/admin/user/add-opinion-by-user`,
      "post",
      payload
    );
    
    if (response.statusCode !== 200) {
      // dispatch(actionLoading(false));
      // return checkErrorCode(response?.code, response?.message);
    }
    // dispatch(actionLoading(false));
    return response;
  } catch (error) {
    // alert(error || error?.message);
  }
};
export const actionLoginUser = (payload) => async (dispatch) => {
  try {
    // dispatch(actionLoading(true));
    let response = await fetchApi(
      `/admin/user/login-user`,
      "post",
      payload
    );
    const token = response?.data?.token || null;
      localStorage.setItem("token", token);
    if (response.code !== 200) {
      // dispatch(actionLoading(false));
      // return checkErrorCode(response?.code, response?.message);
    }
    // dispatch(actionLoading(false));
    await dispatch(actionSaveListUser(response?.data?.user))
    return response;
  } catch (error) {
    // alert(error || error?.message);
  }
};
export const actionLoginByToken = (payload) => async (dispatch) => {
  try {
    // dispatch(actionLoading(true));
    let response = await fetchApi(
      `/admin/user/profile`,
      "get",
      payload
    );
    const token = response?.data?.token || null;
      localStorage.setItem("token", token);
    if (response.code !== 200) {
      // dispatch(actionLoading(false));
      // return checkErrorCode(response?.code, response?.message);
    }
    // dispatch(actionLoading(false));
    await dispatch(actionSaveListUser(response?.data?.user))
    return response;
  } catch (error) {
    // alert(error || error?.message);
  }
};
export const actionSaveListUser = (payload) => ({
  type: Types.SAVE_LIST_USER,
  payload
});
