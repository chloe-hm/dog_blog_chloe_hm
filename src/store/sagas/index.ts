import { all, fork } from 'redux-saga/effects';
import dogsData from 'src/store/sagas/dogsData';

export default function* rootSaga() {
  yield all([fork(dogsData)]);
}
