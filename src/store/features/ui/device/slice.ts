import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// types
////////////////////////////////////////////////////////////
export type DeviceState = {
  device: 'desktop' | 'tablet' | 'mobile'
}

type SetDevice = {
  device: DeviceState['device']
}

// initial state
////////////////////////////////////////////////////////////
const initialState: DeviceState = {
  device: 'desktop'
}

// slice
////////////////////////////////////////////////////////////
export const slice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDevice(state, action: PayloadAction<SetDevice>): void {
      state.device = action.payload.device
    }
  }
})

// exports
////////////////////////////////////////////////////////////
export const { setDevice } = slice.actions

export default slice.reducer
