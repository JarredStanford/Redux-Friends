import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => console.log(err.response));
};

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataStart = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err =>
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response })
    );
};

export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const addFriend = newFriend => dispatch => {
  console.log(newFriend);
  axiosWithAuth()
    .post("http://localhost:5000/api/friends", newFriend)
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FRIEND_FAILURE, payload: err.response });
    });
};
