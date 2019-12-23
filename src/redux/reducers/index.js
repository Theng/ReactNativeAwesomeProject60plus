import { combineReducers } from "redux";
import rc from "../rc";

const sampleState = {
    data: null,
    fetching: false,
    fetchError: false
};

export const sample = (state = sampleState, action) => {
    switch (action.type) {
        case rc.FETCHING_SAMPLE:
            return { ...state, fetching: true, fetchError: false };
        case rc.FETCH_SAMPLE_SUCCESS:
            return { ...state, fetching: false, fetchError: false, data: action.payload };
        case rc.FETCH_SAMPLE_ERROR:
            return { ...state, fetching: false, fetchError: true, data: null };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    sample
});
