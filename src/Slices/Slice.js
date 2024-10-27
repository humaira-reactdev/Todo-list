// import { createSlice } from '@reduxjs/toolkit' //importing the createSlice method

// export const counterSlice = createSlice({
// name: 'counter', // slice name. there may be several slices. this is the name of one of the slices
// initialState: {
// value: 0, //defines the default value/initial state of the slice
// },
// reducers: { //data gulo anar por ki hobe na hobe shob kichhu eikhaane define kora
// //reducers are pure functions
// increment: (state) => {
// state.value += 1
// },
// decrement: (state) => {
// state.value -= 1
// },
// },
// })//createSlice method ends. One slice has been created here

// // Action creators are generated for each case reducer function
// export const { increment, decrement } = counterSlice.actions
// export default counterSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    userData: JSON.parse(localStorage.getItem('userData'))? JSON.parse(localStorage.getItem('userData')): null
  },
  reducers: {
   
    userData: (state, action) => {
      state.userData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {userData} = userSlice.actions

export default userSlice.reducer