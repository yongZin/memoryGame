import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from '../model/gameType';

const propsSlice = createSlice({
  name: 'props',
  initialState,
  reducers: {
    setRun: (state, action: PayloadAction<boolean>) => {
      state.run = action.payload;
    },
    setFinish: (state, action: PayloadAction<boolean>) => {
      state.finish = action.payload;
    },
    setUserRecord: (state, action: PayloadAction<string>) => {
      state.userRecord = action.payload;
    },
    setResetCount: (state, action: PayloadAction<number>) => {
      state.resetCount = action.payload;
    },
    setRank: (state, action: PayloadAction<Array<{ userName: string; userRecord: string }>>) => {
      state.rank = action.payload;
    },
    setMenu: (state, action: PayloadAction<boolean>) => {
      state.menu = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    resetGame: (state) => {
      state.run = false;
      state.finish = false;
      state.userRecord = "00:00";
      state.resetCount += 1;
    }
  },
});

export const { setRun, setFinish, setUserRecord, setResetCount, setRank, setMenu, setLoading, resetGame } = propsSlice.actions;
export default propsSlice.reducer;
