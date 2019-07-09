import React from 'react'
import rootReducer from '../reducers/index'
import {connect} from 'react-redux';
import {addSmurfs} from '../actions';
// import {postSmurfs} from '../actions/index'
import {fetchSmurfs} from '../actions/index';

 
class Smurfs extends React.Component{
    componentDidMount(){
        this.props.fetchSmurfs()
        
    }
     render(){
         console.log(rootReducer)
         return (
            <div>
             <h2>SMURFS!!</h2>
             {this.props.smurfs.map (smurf => {
                 return (
                     <div className='smurfs' key={smurf.id}>
                         <h2>{smurf.name}</h2>
                         <p>age :{smurf.age}</p>
                         <p> height:{smurf.height}</p>
                         </div>
                 )
             })}

            </div>
        )
    }
 
 }
 const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect (
    mapStateToProps,
    {fetchSmurfs}
)(Smurfs)