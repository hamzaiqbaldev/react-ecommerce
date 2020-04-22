import SHOP_DATA from './shop.data';
import { shopActionTypes } from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isLoading: false
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case shopActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isLoading: true
            };
        case shopActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                collections: action.payload
            };
        case shopActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isLoading: false,
                collections: action.payload
            };
        case shopActionTypes.UPDATE_COLLECTION:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default shopReducer;