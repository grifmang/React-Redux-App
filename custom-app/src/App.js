import React from 'react';
import { connect } from "react-redux";
import { getData } from "./actions"
import { Route } from "react-router-dom";
import './App.css';

import DataResults from "./components/DataResults";
import HomePage from './components/HomePage';

function App(props) {

  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/DataResults" component={DataResults} />
    </>
  );
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
)(App);
