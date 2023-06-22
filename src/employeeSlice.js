/**
 * Creates a Redux slice using the `createSlice` function from the `@reduxjs/toolkit` library.
 *
 * @typedef {Object} Slice
 * @property {string} name - The name of the slice.
 * @property {Array|Object} initialState - The initial state of the slice.
 * @property {Object} reducers - An object containing reducer functions for the slice.
 */

/**
 * An action creator function to add an employee to the state.
 *
 * @typedef {Function} AddEmployeeAction
 * @param {any} payload - The payload of the action, representing the employee data.
 */

/**
 * The Redux slice object representing the 'employees' slice of the state.
 *
 * @type {Slice}
 */
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        },
    },
});

/**
 * Action creator for adding an employee to the state.
 *
 * @type {AddEmployeeAction}
 */
export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;