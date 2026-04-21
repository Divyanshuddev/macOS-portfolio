import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {statusBarSlice} from '../features/StatusBarSlice/StatusBarSlice'
import {windowSlice} from '../features/WindowSlice/WindowSlice'
import {resizeWindowSlice} from '../features/WindowSlice/ResizeWindowSlice'
const rootReducer = combineReducers({
  statusbar:statusBarSlice.reducer,
  window:windowSlice.reducer,
  windowresize:resizeWindowSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch