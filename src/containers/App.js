import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import MainPage from '../components/MainPage';
import { requestRobots, setSearchField } from '../actions';

const App = (props) => {
  return <MainPage {...props} />;
};

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
