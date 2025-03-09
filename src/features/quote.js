import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk('fetchQuote', async () => {
    const response = await fetch('https://qapi.vercel.app/api/random');
    return response.json();
})

export const quoteSlice = createSlice({
    name: "quote",
    initialState: { isLoading: false, isError: false, value: {quote: '...Loading. Please Wait', author: 'Nobody Special', id: 'Not-A-Quote'} },
    extraReducers: (builder) => {
        builder.addCase(fetchQuote.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchQuote.fulfilled, (state, action) => {
            state.isLoading = false;
            state.value = Object.assign({}, state.value, action.payload)
        });
        builder.addCase(fetchQuote.rejected, (state, action) => {
            console.log('Uh-Oh', action.payload);
            state.isError = true;
        })
    },
});
//export const { setQuote } = quoteSlice.actions;


export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;

