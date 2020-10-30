import React, { useState } from 'react';

const CounterButton = ({ color }) => {
  const [count, setCount] = useState(0);

  const updateCount = () => setCount(count + 1);

  console.log('counterbutton');

  return (
    <button color={color} onClick={updateCount}>
      Count: {count}
    </button>
  );
};

export default CounterButton;
