import { configureStore } from '@reduxjs/toolkit';
import cargoReducer from '../redusers/cargoReducer';
import directionsReducer from '../redusers/directionsReducer';

export const store = configureStore({
  reducer: {
    cargo: cargoReducer,
    directions: directionsReducer,
  },
});
