import axios from 'axios';

const URL = 'http://localhost:3333/smurfs';

export const ADD_SMURF = 'ADD_SMURF'
export const UPDATE_SMURF = 'UPDATE_SMURF'
export const DELETE_SMURF =  'DELETE_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'
export const FETCH_SMURF ='FETCH_SMURF'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR'

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({type: FETCH_SMURF});
    axios.get(URL)
    .then(res => {
      dispatch({type: FETCH_SMURF_ERROR});
    })
  }
}

export const addSmurf = newSmurf => dispatch => {
  dispatch({type: ADD_SMURF})
  console.log(newSmurf)
  axios.post(URL, newSmurf)
  .then(res =>{
    dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch({type: ADD_SMURF_FAILURE, payload: err})
  })
}

