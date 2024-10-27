import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../src/Slices/Slice'

export default configureStore({
reducer: {
	anyName:userSlice
},
})