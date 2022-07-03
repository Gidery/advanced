import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface Cargo {
  id: string;
  name: string;
  status: null | 'accepted' | 'delivered';
  goods: Goods[];
}

export interface Goods {
  id: string;
  name: string;
  quantity: number;
}

const { storageValue, addItem } = useLocalStorage('cargo');

const initialState: Cargo[] = storageValue;

export const cargoSlice = createSlice({
  name: 'cargo',
  initialState: initialState,
  reducers: {
    addCargo: (state, action: PayloadAction<Cargo>) => {
      addItem(action.payload);
      return state.concat(action.payload);
    },
  },
});

export const { addCargo } = cargoSlice.actions;

export default cargoSlice.reducer;
