const defaultState = {
  value: 0,
};

export const valueReducer = (
  state = defaultState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + action.payload };

    case 'DECREMENT':
      return { ...state, value: state.value - action.payload };

    default:
      return state;
  }
};
