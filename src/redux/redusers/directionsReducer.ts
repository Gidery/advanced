import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Cargo, Goods } from './cargoReducer';

export interface Direction {
  id: string;
  name: string;
  start: string;
  end: string;
  processedCargo: ProcessedCargo[];
}

export interface ProcessedCargo extends Cargo {
  readonly name: string;
  readonly goods: Goods[];
  status: 'accepted' | 'delivered';
}

const { storageValue, addItem, deleteItem, editItem } =
  useLocalStorage('directions');

const initialState: Direction[] = storageValue;

export const directionsSlice = createSlice({
  name: 'directions',
  initialState: initialState,
  reducers: {
    addDirection: (state, action: PayloadAction<Direction>) => {
      addItem(action.payload);
      return state.concat(action.payload);
    },
    deleteDirection: (state, action: PayloadAction<Direction['id']>) => {
      deleteItem(action.payload);
      return state.filter((direction) => direction.id !== action.payload);
    },
    editDirection: (state, action: PayloadAction<Direction>) => {
      editItem(action.payload);
      return state.map((direction) => {
        if (direction.id !== action.payload.id) return direction;
        return action.payload;
      });
    },
  },
});

export const { addDirection, deleteDirection, editDirection } =
  directionsSlice.actions;

export default directionsSlice.reducer;
