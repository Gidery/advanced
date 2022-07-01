import { createSlice } from '@reduxjs/toolkit';

export const cargoSlice = createSlice({
  name: 'cargo',
  initialState: [
    {
      id: 1,
      name: 'cargo template #1',
      status: 'accepted',
      goods: [
        {
          name: 'products',
          quantity: 15,
        },
      ],
    },
    {
      id: 2,
      name: 'cargo template #2',
      status: 'delivered',
      goods: [
        {
          name: 'toys',
          quantity: 4,
        },
      ],
    },
  ],
  reducers: {
    addCargo: (state, action) => {
      const newCargo = {
        id: Math.random(),
        name: action.payload.name,
        status: 'delivered',
        goods: [],
      };

      return state.concat(newCargo);
    },
  },
});

export const { addCargo } = cargoSlice.actions;

export default cargoSlice.reducer;
