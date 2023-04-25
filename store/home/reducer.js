import { Types } from './types'

const initialState = {
    isShowSiderbar: true,
    dataConfig: {
        rows: [],
        total : 0,
    },
    spin: false,

}
const homeReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case Types.SAVE_OPEN_HIDE_SIDERBAR:
            return {
                ...newState,
                isShowSiderbar: action.payload
            }
        case Types.SAVE_LIST_CONFIG:
            return {
                ...newState,
                dataConfig: action.payload
            }
        case Types.SAVE_LOADINGS:
            return {
                ...newState,
                spin: action.payload
            }
        default:
            return { ...newState }
    }
}
export default homeReducer
