import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import { requestRobots, setSearchField } from '../actions';

const App = ({
  searchField,
  robots,
  isPending,
  error,
  onSearchChange,
  onRequestRobots,
}) => {
  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  if (isPending) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="tc">
      <Header />
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
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
