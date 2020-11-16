import React, { useEffect } from 'react';

import './MainPage.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

const MainPage = ({
  searchField,
  robots,
  isPending,
  error,
  onSearchChange,
  onRequestRobots,
}) => {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  if (isPending) {
    return <h1>Loading</h1>;
  }

  if (robots.length === 0 || Object.keys(robots).length === 0 || error) {
    return <h1>Error: {error}</h1>;
  }

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="tc">
      <Header />
      <SearchBox
        id="searchBox"
        searchChange={onSearchChange}
        searchField={searchField}
      />
      <Scroll>
        <ErrorBoundary>
          <CardList id="cardList" data={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default MainPage;
