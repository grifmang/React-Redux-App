import React from "react";
import { getData } from "../actions";
import { connect } from "react-redux";

const HomePage = (props) => {

    return (
        <div>
            <button onClick={props.getData}>Click for Data stuffs</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      data: state.data,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getData }
  )(HomePage);
  