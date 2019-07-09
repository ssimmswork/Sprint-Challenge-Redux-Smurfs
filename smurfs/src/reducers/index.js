import {
  ADD_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  FETCH_SMURF,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_ERROR


} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}


 const rootReducer = ( state = initialState, action) => {
  console.log('reducer', action)
  switch(action.type) {
    case FETCH_SMURF:
    return{
      ...state,
      fetching:true,
          error:''

    }
    case FETCH_SMURF_SUCCESS:
    return{
      ...state,
      smurfs: action.payload,
      fetching: false,
      error: ''
    }
    case FETCH_SMURF_ERROR:
    return{
      ...state,
      fetching: false,
      error: action.payload

    }
    case ADD_SMURF:
    return{
      ...state,
      fetching: true,
      error: ''
    }
    case ADD_SMURF_SUCCESS:
    return{
      ...state,
      fetching: false,
      error:''
    }
    case ADD_SMURF_FAILURE:
    return{
      ...state,
      fetching:false,
      error:action.payload
    }

    default: 
    return state;
  }
}

export default rootReducer();