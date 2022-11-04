import {ActionTypes} from "../constants/actionTypes";

const initialState = {
    myNftData:[

    ]
}

export const nftReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.SET_NFTS:
            return {...state, myNftData: payload}
        default:
            return state
    }
}
