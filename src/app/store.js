import { configureStore } from '@reduxjs/toolkit';
import { carApi } from '../features/car/CarApi';
import { careerApi } from '../features/career/CareerApi';
import { contactApi } from '../features/contact/ContactApi';
import { sliderApi } from '../features/slider/SliderApi';
import themeSlice from '../reducers/theme';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [carApi.reducerPath]: carApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer,
    theme: themeSlice
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    carApi.middleware,
    sliderApi.middleware,
    contactApi.middleware,
    careerApi.middleware
  ])
});
