import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface Cargo {
  readonly id: string;
  name: string;
  goods: Goods[];
}

export interface Goods {
  readonly id: string;
  name: string;
  quantity: number;
}

const { storageValue, addItem, deleteItem, editItem } =
  useLocalStorage('cargo');

const initialState: Cargo[] = storageValue;

export const cargoSlice = createSlice({
  name: 'cargo',
  initialState: initialState,
  reducers: {
    addCargo: (state, action: PayloadAction<Cargo>) => {
      addItem(action.payload);
      return state.concat(action.payload);
    },
    deleteCargo: (state, action: PayloadAction<Cargo['id']>) => {
      deleteItem(action.payload);
      return state.filter((cargo) => cargo.id !== action.payload);
    },
    editCargo: (state, action: PayloadAction<Cargo>) => {
      editItem(action.payload);
      return state.map((cargo) => {
        if (cargo.id !== action.payload.id) return cargo;
        return action.payload;
      });
    },
  },
});

export const { addCargo, deleteCargo, editCargo } = cargoSlice.actions;

export default cargoSlice.reducer;
