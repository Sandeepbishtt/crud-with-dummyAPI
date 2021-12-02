import {configureStore} from '@reduxjs/toolkit'
import DashboardSlice from './Reducer'
export default configureStore({
    reducer:{
        userData:DashboardSlice.reducer
    }
})