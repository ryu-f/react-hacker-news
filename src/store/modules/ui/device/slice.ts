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

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDevice(state, action: PayloadAction<SetDevice>) {
      state.device = action.payload.device
    }
  }
})

export const { setDevice } = deviceSlice.actions

export default deviceSlice.reducer
