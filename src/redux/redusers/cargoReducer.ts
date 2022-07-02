import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Cargo {
  id: number;
  name: string;
  status: null | 'accepted' | 'delivered';
  goods: Goods[];
}

interface Goods {
  name: string;
  quantity: number;
}

const initialState: Cargo[] = [
  {
    id: 1,
    name: 'cargo template #1',
    status: null,
    goods: [
      {
        name: 'products',
        quantity: 15,
      },
      {
        name: 'products',
        quantity: 15,
      },
      {
        name: 'products',
        quantity: 15,
      },
    ],
  },
  {
    id: 2,
    name: 'cargo template #2',
    status: null,
    goods: [
      {
        name: 'toys',
        quantity: 4,
      },
    ],
  },
];

export const cargoSlice = createSlice({
  name: 'cargo',
  initialState: initialState,
  reducers: {
    addCargo: (state, action: PayloadAction<{ name: string }>) => {
      const newCargo: Cargo = {
        id: Math.random(),
        name: action.payload.name,
        status: null,
        goods: [],
      };

      return state.concat(newCargo);
    },
  },
});

export const { addCargo } = cargoSlice.actions;

export default cargoSlice.reducer;
