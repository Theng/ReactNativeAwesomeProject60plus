import { call, put, all, takeLatest } from "redux-saga/effects";
import rc from "../rc";
import { getData } from "../../providers/load-data";

/******************************************************************************/
/*******************************  Worker  *************************************/
/******************************************************************************/
export function* fetchSample() {
    try {
        yield put({
            type: rc.FETCHING_SAMPLE
        });
        const response = yield call(getData,"https://jsonplaceholder.typicode.com/users");
        yield put({
            type: rc.FETCH_SAMPLE_SUCCESS,
            payload: response
        });
    } catch (error) {
        yield put({
            type: rc.FETCH_SAMPLE_ERROR,
            payload: error
        });
    }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* watchFetchSample() {
    yield takeLatest(rc.FETCH_SAMPLE, fetchSample);
}

/******************************************************************************/
/*******************************   Root   *************************************/
/******************************************************************************/
export default function* root() {
    yield all([
        call(watchFetchSample),
    ]);
}
