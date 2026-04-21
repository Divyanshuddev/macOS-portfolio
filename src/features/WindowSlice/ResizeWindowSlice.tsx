import { createSlice } from "@reduxjs/toolkit";

export interface ResizeWindowState {
    width: number;
    height: number;
    isMaximized:boolean;
}

const initialState: ResizeWindowState = {
    width: 800,
    height: 750,
    isMaximized:true
}

export const resizeWindowSlice = createSlice({
    name: "windowresize",
    initialState,
    reducers: {
        currentWindowSize: (state, action) => {
            const { currentWidth, currentHeight } = action.payload
            state.width = currentWidth
            state.height = currentHeight            
        },
        isMaximizedFunc:(state,action)=>{
            state.isMaximized=action.payload;
        }
    }
})

export const { currentWindowSize,isMaximizedFunc } = resizeWindowSlice.actions
export default resizeWindowSlice.reducer