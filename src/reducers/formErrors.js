import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_FAILURE } from '../types';

export default function formErrors(state = {}, action = {}) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return { ...state, signup: {} };
    case CREATE_USER_FAILURE:
      return { ...state, signup: action.errors };
      case FETCH_CURRENT_USER_REQUEST:
      return { ...state, fetchCurrentUser: {} };
    case FETCH_CURRENT_USER_FAILURE:
      return { ...state, fetchCurrentUser: action.errors };
    default:
      return state;
  }
}
