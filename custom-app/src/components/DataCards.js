import React from 'react';
import { element } from 'prop-types';

const DataCards = (props) => {

    return (
        <div>
            <img src={props.img} />
            <h2>{props.name}</h2>
            <p>{props.status}</p>
            <p>{props.species}</p>
        </div>
    )
}

export default DataCards;
// const mapStateToProps = state => {
//     return {
//       data: state.data,
//       isFetching: state.isFetching,
//       error: state.error
//     };
//   };
  
//   export default connect(
//     mapStateToProps,
//     {}
//   )(DataCards);