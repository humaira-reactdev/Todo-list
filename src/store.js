import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../src/Slices/Slice'

export default configureStore({
reducer: {
	anyName:counterSlice, //the counterSlice function is stored in this variable
	//There may be more slices here
},
})