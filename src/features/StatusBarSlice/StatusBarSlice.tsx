import { createSlice } from "@reduxjs/toolkit";
export interface StatusBarState{
    statusPanel:boolean;
}
const initialState:StatusBarState={
    statusPanel:false,
}
export const statusBarSlice=createSlice({
    name:"statusbar",
    initialState,
    reducers:{
        setStatusBarPanel:(state)=>{
            state.statusPanel=!state.statusPanel
        }
    }
})
export const {setStatusBarPanel} = statusBarSlice.actions
export default statusBarSlice.reducer