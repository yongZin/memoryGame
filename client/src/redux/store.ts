import { configureStore } from '@reduxjs/toolkit';
import propsReducer from './propsSlice';

export type RootState = {
  props: ReturnType<typeof propsReducer>;
};

const store = configureStore({
  reducer: {
    props: propsReducer,
  }
});

export default store;