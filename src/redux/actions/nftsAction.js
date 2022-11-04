import {ActionTypes} from "../constants/actionTypes";

export const setNfts = (nfts) => {
    return{
        type: ActionTypes.SET_NFTS,
        payload: nfts,
    }
}
