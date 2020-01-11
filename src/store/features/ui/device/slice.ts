import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// types
////////////////////////////////////////////////////////////
export type State = {
  device: 'desktop' | 'tablet' | 'mobile'
}

type SetDevice = {
  device: State['device']
}

// initial state
////////////////////////////////////////////////////////////
const initialState: State = {
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
export const { actions: deviceActions } = slice

export default slice.reducer
