import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type DeviceState = {
  device: 'desktop' | 'tablet' | 'mobile'
}

type SetDevice = {
  device: DeviceState['device']
}

const initialState: DeviceState = {
  device: 'desktop'
}

export const slice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDevice(state, action: PayloadAction<SetDevice>): void {
      state.device = action.payload.device
    }
  }
})

export const { setDevice } = slice.actions

export default slice.reducer
