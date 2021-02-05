import { USER_TYPES } from '../types/user.types'

export function UserReducer(state, action) {
  const currentState = { ...state }

  switch (action.type) {
    case USER_TYPES.UPDATE_AVATAR:
      return currentState

    default:
      return currentState
  }
}
