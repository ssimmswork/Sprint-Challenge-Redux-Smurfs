import axios from 'axios';

export const FETCH_SMURF  = 'FETCH_SMURF';
export const FETCH_SMURF_SUCCESS  = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR  = 'FETCH_SMURF_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

const URL = 'http://localhost:3333/smurfs';

export const fetchSmurfs = () => dispatch => {
  dispatch({type:FETCH_SMURF});
  axios
    .get(URL)
    .then(res =>{
      console.log(res.data);
        dispatch({type:FETCH_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch({type:FETCH_SMURF_ERROR, payload: err}));
}; 

export const addSmurf = (smurf) => dispatch => {
  dispatch({type:ADD_SMURF});
  axios
    .post(URL,smurf)
    .then(res =>{
      console.log(res.data);
        dispatch({type:ADD_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch({type:ADD_SMURF_FAILURE, payload: err}));
}; 
