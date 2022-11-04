import {combineReducers} from "redux";
import {nftReducer} from "./nftReducer";


const reducers = combineReducers({
    allNfts : nftReducer,
})

export default reducers;
