import {UserActionTypes} from './constants'
import {UserAction, UserState} from '../../types/users'
import {initialUserState} from './initialStates'

export const  userReducer = (state = initialUserState, action:UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS: {
      return {
        loading: true,
        error: null
      }
    }

    case UserActionTypes.FETCH_USERS_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        error: null
      }
    }

    case UserActionTypes.FETCH_USERS_ERROR: {
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}