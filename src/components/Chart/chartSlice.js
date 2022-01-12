import { createSlice } from '@reduxjs/toolkit';

const init_array = new Array(12).fill(0)
const initialState = {
    'website': init_array,
    'app': init_array,
    'linux': init_array,
    'window': init_array
}

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        updateData(state, action) {
            const month = action.payload.month;
            console.log('Month: ', month);
            Object.keys(state).forEach(k => {
                state[k][month - 1] = action.payload[k];
            })
        }
    }
});

export const { updateData } = chartSlice.actions;
export default chartSlice.reducer;