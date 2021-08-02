import { AxiosResponse } from 'axios';
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Api from 'src/api';
import * as Action from 'src/store/modules/dogsData';

// 강아지 데이터 호출
function* getDogsData(query) {
  const queryData = query.payload;

  try {
    const response: AxiosResponse = yield call(
      Api.dogList.getDogsData.bind(null, queryData)
    );
    yield put(Action.getDogsDataSuccess(response));
  } catch (err) {
    yield put(Action.getDogsDataFail());
    console.error(err);
  }
}

// 인피니트 스크롤 데이터 호출
function* moreDogsData(query) {
  const queryData = query.payload.queryData;

  try {
    const response: AxiosResponse = yield call(
      Api.dogList.getDogsData.bind(null, queryData)
    );
    yield put(Action.getDogsDataSuccess(response));
  } catch (err) {
    yield put(Action.getDogsDataFail());
    console.error(err);
  }
}

// 정렬된 강아지 데이터 호출
function* getSortedDogsData(query) {
  const queryData = query.payload.queryData;

  try {
    const response: AxiosResponse = yield call(
      Api.dogList.getDogsData.bind(null, queryData)
    );
    yield put(Action.sortedDogsDataSuccess(response));
  } catch (err) {
    yield put(Action.getDogsDataFail());
    console.error(err);
  }
}

// 필터링된 강아지 데이터 호출
function* filterDogData(query) {
  const queryData = query.payload.queryData;

  try {
    const response: AxiosResponse = yield call(
      Api.dogList.filterDogData.bind(null, queryData)
    );
    yield put(Action.filterDogsDataSuccess(response));
  } catch (err) {
    yield put(Action.getDogsDataFail());
    console.error(err);
  }
}

function* watchGetDogsData() {
  yield takeEvery(Action.GET_DOGS_DATA, getDogsData);
  yield takeEvery(Action.MORE_DOGS_DATA, moreDogsData);
  yield takeEvery(Action.SORTED_DOGS_DATA, getSortedDogsData);
  yield takeEvery(Action.FILTER_DOGS_DATA, filterDogData);
}

export default function* watchSaga() {
  yield fork(watchGetDogsData);
}
