import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RouteActiveInterface, UIState } from '@/interface/UiInterface'

// Define the initial state using that type
const initialState: UIState = {
  routeActive: undefined
}

export const uiSlice = createSlice({
  name: 'ui',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setRouteActive: (state, action: PayloadAction<RouteActiveInterface>) => {
      state.routeActive = action.payload
    }
  }
})

export const { setRouteActive } = uiSlice.actions

export default uiSlice.reducer
