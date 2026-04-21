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
                case "Music":
                    state.musicWindow=true
                    return
                case "Terminal":
                    state.terminalWindow=true
                    return
                case "Videos":
                    state.videoWindow=true
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
                case "Music":
                    state.musicWindow=false
                    return
                case "Terminal":
                    state.terminalWindow=false
                    return
                case "Videos":
                    state.videoWindow=false
                    return
                default:
                    return
            }
        }
    }
})

export const {openWindow,closeWindow} = windowSlice.actions
export default windowSlice.reducer