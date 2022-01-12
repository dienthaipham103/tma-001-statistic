import { configureStore } from '@reduxjs/toolkit';
import chartReducer from '../components/Chart/chartSlice';

const rootReducer = {
    chart: chartReducer
}

const store = configureStore({
    reducer: rootReducer
});

export default store;