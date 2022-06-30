const defaultState = {
  users: [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bob' },
    { id: 3, name: 'den' },
    { id: 4, name: 'nina' },
  ],
};

export const userReducer = (
  state = defaultState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: state.users.concat({ id: Math.random(), name: action.payload }),
      };

    case 'DELETE_USERS':
      return {
        ...state,
        users: state.users.filter((user) => user.name !== action.payload),
      };

    default:
      return state;
  }
};
