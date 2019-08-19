import { call, put } from 'redux-saga/effects';
import { userLoggedIn } from '../actions/auth';
import { createUserFailure, fetchCurrentUserFailure } from '../actions/users';
import api from '../api';
import history from '../history';

export function* createUserSaga(action) {
  try {
    const user = yield call(api.user.signup, action.user);
    localStorage.currentUserName = user.username;
    localStorage.currentUserEmail = user.email;
    localStorage.photosalonJWT = user.token;
    yield put(userLoggedIn(user));
    history.push('/HomeUser');
  } catch (err) {
    yield put(createUserFailure(err.response.data.errors));
  }
}

export function* fetchUserSaga() {
  try {
    const user = yield call(api.user.fetchCurrentUser);
    yield put(userLoggedIn(user));
  } catch (err) {
    yield put(fetchCurrentUserFailure(err.response.data.errors));
  }
}
