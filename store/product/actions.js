import { fetchApi } from "../../app/lib/api";
import { Types } from "./types";
// import { actionLoading } from "../home/actions";
// import { checkErrorCode } from "../auth/actions";
import { LIMIT_PAGE, LIMIT_PAGE_MAX } from "../../app/lib/commom";

export const actionGetListProduct= (payload) => async (dispatch) => {
  try {
    // dispatch(actionLoading(true));
    const { page, limit } = payload;

    payload.limit = limit || LIMIT_PAGE;
    let response = await fetchApi(
      `/admin/product/get-list-product`,
      "get",
      payload
    );
    
    if (response.code !== 200) {
      // dispatch(actionLoading(false));
      // return checkErrorCode(response?.code, response?.message);
    }
    response.data = {
      ...response.data,
      paging: {
        page: page || 1,
        total: response?.data?.total || 0,
        count: Math.ceil(response?.data?.total / LIMIT_PAGE),
        limit: LIMIT_PAGE,
      },
    };
    await dispatch(actionSaveListProduct(response.data));
    // dispatch(actionLoading(false));
    return response.data;
  } catch (error) {
    // alert(error || error?.message);
  }
};


export const actionGetDetailProduct= (id) => async (dispatch) => {
  try {
    // dispatch(actionLoading(true));
    let response = await fetchApi(
      `/admin/product/get-detail-product/id=${id}`,
      "get",
    );
    
    if (response.code !== 200) {
      // dispatch(actionLoading(false));
      // return checkErrorCode(response?.code, response?.message);
    }
    // response.data = {
    //   ...response.data,
    //   paging: {
    //     page: page || 1,
    //     total: response?.data?.total || 0,
    //     count: Math.ceil(response?.data?.total / LIMIT_PAGE),
    //     limit: LIMIT_PAGE,
    //   },
    // };
    // await dispatch(actionSaveListProduct(response.data));
    // dispatch(actionLoading(false));
    return response.data;
  } catch (error) {
    // alert(error || error?.message);
  }
};


export const actionSaveListProduct = (payload) => ({
  type: Types.SAVE_LIST_PRODUCT,
  payload,
});
