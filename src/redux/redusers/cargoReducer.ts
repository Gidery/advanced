import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Cargo {
  id: number;
  name: string;
  status: null | 'accepted' | 'delivered';
  goods: Goods[];
}

export interface Goods {
  id: string;
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
        id: '1',
        name: 'products',
        quantity: 15,
      },
      {
        id: '2',
        name: 'products',
        quantity: 15,
      },
      {
        id: '3',
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
        id: '4',
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
