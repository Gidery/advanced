import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT', payload: 2 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT', payload: 3 });
  };

  return (
    <div className="App-header">
      Home
      <br />
      <span>{`value: ${value}`}</span>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  );
};
