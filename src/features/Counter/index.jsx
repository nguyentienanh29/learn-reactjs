import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

Counter.propTypes = {};

function Counter(props) {
  const countState = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    const action = increase();
    dispatch(action);
  };
  const handleDecrease = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      Counter: {countState}
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Increase</button>
      </div>
    </div>
  );
}

export default Counter;
