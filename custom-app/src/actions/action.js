import axios from 'axios';

const API_KEY=process.env.REACT_APP_API_KEY

// export consts
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
// async action creator

export const getData = () => dispatch => {
    console.log('it worked')
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
        console.log(res.data.results);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};