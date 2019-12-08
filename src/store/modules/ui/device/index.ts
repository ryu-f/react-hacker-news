import * as DEVICE_TYPES from './types'
import * as deviceActions from './actions'
import * as deviceSelectors from './selector'

import { State, reducer } from './reducer'

export { deviceSelectors, deviceActions, DEVICE_TYPES, reducer }

export type DeviceState = State
