import { createSlice } from "@reduxjs/toolkit";

// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    result: 0,
  },
  reducers: {
    add: (state, action) => {
      state.result += action.payload;
    },
    substract: (state, action) => {
      state.result -= action.payload;
    },
  },
});

export const { add, substract } = calculatorSlice.actions;
export default calculatorSlice.reducer;
