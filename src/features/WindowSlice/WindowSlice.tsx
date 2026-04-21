import { createSlice } from "@reduxjs/toolkit";

export interface WindowState {
    photosWindow: boolean;
    musicWindow: boolean;
    vscodeWindow: boolean;
    terminalWindow: boolean;
    videoWindow: boolean;
    resumeWindow: boolean;
    currentTab:string;
    mphotosWindow: boolean;
    mmusicWindow: boolean;
    mvscodeWindow: boolean;
    mterminalWindow: boolean;
    mvideoWindow: boolean;
    mresumeWindow: boolean;
    finder:boolean;
}

const initialState: WindowState = {
    photosWindow: false,
    musicWindow: false,
    vscodeWindow: false,
    terminalWindow: false,
    videoWindow: false,
    resumeWindow: false,
    currentTab:"home.tsx",
    mphotosWindow: false,
    mmusicWindow: false,
    mvscodeWindow: false,
    mterminalWindow: false,
    mvideoWindow: false,
    mresumeWindow: false,
    finder:false,
}

export const windowSlice = createSlice({
    name: "window",
    initialState,
    reducers: {
        openWindow: (state, action) => {
            switch (action.payload) {
                case "Photos":
                    state.photosWindow = true
                    state.finder=false
                    return
                case "Music":
                    state.musicWindow = true
                    state.finder=false
                    return
                case "Terminal":
                    state.terminalWindow = true
                    state.finder=false
                    return
                case "Videos":
                    state.videoWindow = true
                    state.finder=false
                    return
                case "Resume":
                    state.resumeWindow = true
                    state.finder=false
                    return
                case "VS Code":
                    state.vscodeWindow=true
                    state.finder=false
                    return
                case 'Github':
                    window.open('https://github.com/Divyanshuddev',"_blank")
                    return
                case 'Linkedin':
                    window.open('https://www.linkedin.com/in/divyanshu-sharma-a977011b4/',"_blank")
                    return
                case 'Whatsapp':
                    window.open('https://api.whatsapp.com/send/?phone=%2B918303006600&text&type=phone_number&app_absent=0',"_blank")
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
        },
        minimizedWindow:(state,action)=>{
            switch (action.payload) {
                case "Photos":
                    state.mphotosWindow = true
                    return
                case "Music":
                    state.mmusicWindow = true
                    return
                case "Terminal":
                    state.mterminalWindow = true
                    return
                case "Videos":
                    state.mvideoWindow = true
                    return
                case "Resume":
                    state.mresumeWindow = true
                    return
                case "VS Code":
                    state.mvscodeWindow=true
                    return
                default:
                    return
            }
        },
        offminimizedWindow:(state,action)=>{
             switch (action.payload) {
                case "Photos":
                    state.mphotosWindow = false
                    return
                case "Music":
                    state.mmusicWindow = false
                    return
                case "Terminal":
                    state.mterminalWindow = false
                    return
                case "Videos":
                    state.mvideoWindow = false
                    return
                case "Resume":
                    state.mresumeWindow = false
                    return
                case "VS Code":
                    state.mvscodeWindow=false
                    return
                default:
                    return
            }
        },
        setFinder:(state)=>{
            state.finder=!state.finder
        }
    }
})
export const { openWindow, closeWindow,setCurrentTab,minimizedWindow,offminimizedWindow,setFinder} = windowSlice.actions
export default windowSlice.reducer