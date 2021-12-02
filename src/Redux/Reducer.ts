
import {createSlice,PayloadAction } from '@reduxjs/toolkit'

interface Data{
userData:any[]
showSearchData:boolean
searchData:any[]
refreshGetUser:boolean

}

const DashboardSlice = createSlice({
    name:'userData',
    initialState:{
        userData:[],
        showSearchData:false,
        searchData:[],
        refreshGetUser :false,
       
    } as  Data,
    reducers:{
        addUserData:(state,action:PayloadAction<any>) =>{
         state.userData = action.payload
        },
        showSearch :(state) =>{
            state.showSearchData = true
        },
        setSearchData :(state,action:PayloadAction<any>) =>{
            state.searchData = action.payload
        },
        refreshHandler :(state) => {
            state.refreshGetUser = !state.refreshGetUser
        }
      

    }
})

export const {addUserData,showSearch,setSearchData,refreshHandler} = DashboardSlice.actions

export const fetchData = (state:any) => state.userData.userData

export const searchData = (state:any) => state.userData.searchData

export const searchingData = (state:any) => state.userData.showSearchData

export const refreshData = (state:any) => state.userData.refreshGetUser


export default DashboardSlice