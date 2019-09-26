import * as TYPES from './types'
import * as creators from './actions'

import { CreatorToActions } from '@/store/modules/CreatorToActions'
import produce from 'immer'

export type State = {
  device: 'desktop' | 'tablet' | 'mobile'
}

const initialState: State = {
  device: 'desktop'
}

type Actions = CreatorToActions<typeof creators>

export const reducer = (state: State = initialState, action: Actions): State => {
  return produce(state, draft => {
    switch (action.type) {
      case TYPES.SET_DEVICE:
        draft.device = action.payload
        break

      default:
        break
    }
  })
}
