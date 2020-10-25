import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from '../actions';

const App = ({ searchField, onSearchChange }) => {
  const [robots, setRobots] = useState([]);

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    // Can't change this to async/await (produces CORS response)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setRobots(data);
      });
  }, []);

  if (!robots.length) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} searchField={searchField} />
      <Scroll>
        <ErrorBoundary>
          <CardList data={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
