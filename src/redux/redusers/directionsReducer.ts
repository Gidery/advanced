import { createSlice } from '@reduxjs/toolkit';

export const directionsSlice = createSlice({
  name: 'directions',
  initialState: [
    {
      id: 1,
      name: 'direction template #1',
      start: 'start point',
      end: 'end point',
      deliveredCargo: [],
    },
  ],
  reducers: {},
});

export const {} = directionsSlice.actions;

export default directionsSlice.reducer;
