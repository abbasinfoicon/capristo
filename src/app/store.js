import { configureStore } from '@reduxjs/toolkit';
import { carApi } from '../features/car/CarApi';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [carApi.reducerPath]: carApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware),
});
