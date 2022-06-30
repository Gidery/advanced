import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value.value);
  const users = useSelector((state) => state.users.users);

  const incrementHandler = (value: number) => {
    dispatch({ type: 'INCREMENT', payload: value });
  };

  const decrementHandler = (value: number) => {
    dispatch({ type: 'DECREMENT', payload: value });
  };

  const addUser = (name: string | null) => {
    dispatch({ type: 'ADD_USER', payload: name ?? '' });
  };

  const deleteUser = (name: string | null) => {
    dispatch({ type: 'DELETE_USERS', payload: name ?? '' });
  };

  return (
    <div className="App-header">
      Home
      <br />
      <span>{`value: ${value}`}</span>
      <button onClick={() => incrementHandler(3)}>increment</button>
      <button onClick={() => decrementHandler(3)}>decrement</button>
      {users.length > 0 &&
        users.map((user) => <div>{`${user.id}. ${user.name}`}</div>)}
      <button onClick={() => addUser(prompt())}>add user</button>
      <button onClick={() => deleteUser(prompt())}>delete user</button>
    </div>
  );
};
