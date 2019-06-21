import {
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  loggingIn: false,
  fetching: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };
    case FETCH_DATA_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        friends: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
