import React from 'react';

const Scroll = ({ children }) => {
  const styles = {
    overflowY: 'scroll',
    border: '5px solid black',
    height: '800px',
  };

  return <div style={styles}>{children}</div>;
};

export default Scroll;
