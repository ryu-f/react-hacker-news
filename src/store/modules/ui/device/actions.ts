import * as TYPES from './types'

import { State } from './reducer'

type SetDeviceAction = {
  payload: State['device']
}

export const setDevice = (device: SetDeviceAction['payload']) => ({
  type: TYPES.SET_DEVICE,
  payload: device
})
