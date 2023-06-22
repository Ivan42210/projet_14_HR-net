/**
 * Redux store configuration using the `configureStore` function from the `@reduxjs/toolkit` library.
 *
 * @typedef {Object} Store
 * @property {Function} dispatch - A function used to dispatch actions to change the state.
 * @property {Function} getState - A function used to retrieve the current state of the store.
 * @property {Function} subscribe - A function used to subscribe to changes in the store.
 * @property {Function} replaceReducer - A function used to replace the store's root reducer.
 */

/**
 * Redux store created using the `configureStore` function.
 *
 * @type {Store}
 */
import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeeSlice';

const store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
});

export default store;
