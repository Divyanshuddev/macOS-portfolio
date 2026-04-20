import { createSlice } from "@reduxjs/toolkit";
export interface StatusBarState{
    statusPanel:boolean;
    wifi:boolean;
    bluetooth:boolean;
    volume:boolean;

}
const initialState:StatusBarState={
    statusPanel:false,
    wifi:true,
    bluetooth:false,
    volume:true,
}
export const statusBarSlice=createSlice({
    name:"statusbar",
    initialState,
    reducers:{
        setStatusBarPanel:(state)=>{
            state.statusPanel=!state.statusPanel
        },
        setStatusBarTools:(state,action)=>{
            switch(action.payload){
                case 'Github':
                    window.open('https://github.com/Divyanshuddev',"_blank")
                    return
                case 'LinkedIn':
                    window.open('https://www.linkedin.com/in/divyanshu-sharma-a977011b4/',"_blank")
                    return
                case 'Whatsapp':
                    window.open('https://api.whatsapp.com/send/?phone=%2B918303006600&text&type=phone_number&app_absent=0',"_blank")
                    return
                case 'Wi-Fi':
                    state.wifi=!state.wifi
                    return
                case 'Bluetooth':
                    state.bluetooth=!state.bluetooth
                    return
                default:
                    return
            }
        },
        setVolume:(state,action)=>{
            state.volume=action.payload
        }
    }
})
export const {setStatusBarPanel,setStatusBarTools,setVolume} = statusBarSlice.actions
export default statusBarSlice.reducer