import { createSlice } from '@reduxjs/toolkit';
import { Cargo } from './cargoReducer';

export interface Directions {
  id: string;
  name: string;
  start: string;
  end: string;
  cargo: Cargo[];
}

const initialState: Directions[] = [];

export const directionsSlice = createSlice({
  name: 'directions',
  initialState: initialState,
  reducers: {},
});

export const {} = directionsSlice.actions;

export default directionsSlice.reducer;
