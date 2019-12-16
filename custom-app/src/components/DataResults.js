import React from "react";
import DataCards from "./DataCards"; 
import { connect } from "react-redux";

const DataResults = (props) => {
    console.log(props);
    return (
        <div>
            {props.data.map(element => {
                return <DataCards key={element.id} name={element.name} status={element.status} species={element.species} img={element.image} />
            })}
            
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
    {}
  )(DataResults);