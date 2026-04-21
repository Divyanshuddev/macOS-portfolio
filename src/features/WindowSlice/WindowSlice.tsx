import { createSlice } from "@reduxjs/toolkit";

export interface WindowState {
    photosWindow: boolean;
    musicWindow: boolean;
    vscodeWindow: boolean;
    terminalWindow: boolean;
    videoWindow: boolean;
    resumeWindow: boolean;
    currentTab:string;
}

const initialState: WindowState = {
    photosWindow: false,
    musicWindow: false,
    vscodeWindow: false,
    terminalWindow: false,
    videoWindow: false,
    resumeWindow: false,
    currentTab:"home.tsx",
}

export const windowSlice = createSlice({
    name: "window",
    initialState,
    reducers: {
        openWindow: (state, action) => {
            switch (action.payload) {
                case "Photos":
                    state.photosWindow = true
                    return
                case "Music":
                    state.musicWindow = true
                    return
                case "Terminal":
                    state.terminalWindow = true
                    return
                case "Videos":
                    state.videoWindow = true
                    return
                case "Resume":
                    state.resumeWindow = true
                    return
                case "VS Code":
                    state.vscodeWindow=true
                    return
                default:
                    return
            }
        },
        closeWindow: (state, action) => {
            switch (action.payload) {
                case "Photos":
                    state.photosWindow = false
                    return
                case "Music":
                    state.musicWindow = false
                    return
                case "Terminal":
                    state.terminalWindow = false
                    return
                case "Videos":
                    state.videoWindow = false
                    return
                case "Resume":
                    state.resumeWindow = false
                    return
                case "VS Code":
                    state.vscodeWindow=false
                    return
                default:
                    return
            }
        },
        setCurrentTab:(state,action)=>{
            state.currentTab=action.payload
        }
    }
})
export const { openWindow, closeWindow,setCurrentTab} = windowSlice.actions
export default windowSlice.reducer