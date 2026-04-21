import { createSlice } from "@reduxjs/toolkit";

export interface WindowState{
    photosWindow:boolean;
    musicWindow:boolean;
    vscodeWindow:boolean;
    terminalWindow:boolean;
    videoWindow:boolean;
    resumeWindow:boolean;
}

const initialState:WindowState={
     photosWindow:false,
    musicWindow:false,
    vscodeWindow:false,
    terminalWindow:false,
    videoWindow:false,
    resumeWindow:false,
}

export const windowSlice=createSlice({
    name:"window",
    initialState,
    reducers:{
        openWindow:(state,action)=>{
            switch(action.payload){
                case "Photos":
                    state.photosWindow=true
                    return
                default:
                    return
            }
        },
        closeWindow:(state,action)=>{
            switch(action.payload){
                case "Photos":
                    state.photosWindow=false
                    return
                default:
                    return
            }
        }
    }
})

export const {openWindow,closeWindow} = windowSlice.actions
export default windowSlice.reducer