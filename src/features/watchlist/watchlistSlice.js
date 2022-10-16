import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      state.watchlist.unshift(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (el) => el.id !== action.payload.id
      );
    },
    clearWatchlist: (state) => {
      state.watchlist = [];
    },
  },
});

export default watchlistSlice.reducer;
export const { addToWatchlist, removeFromWatchlist, clearWatchlist } =
  watchlistSlice.actions;
