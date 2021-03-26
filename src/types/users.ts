import {UserActionTypes} from '../store/reducers/constants'
export interface UserState {
  users?: any[];
  loading: boolean;
  error: null | string;
}

export interface FetchUsersAction {
  payload?: any[] 
  type: UserActionTypes.FETCH_USERS
}

export interface FetchUsersActionSuccess { 
  payload: any[] 
  type: UserActionTypes.FETCH_USERS_SUCCESS
}

export interface FetchUsersActionError { 
  payload: string
  type: UserActionTypes.FETCH_USERS_ERROR
}

export type UserAction = 
  FetchUsersAction 
  | FetchUsersActionSuccess 
  | FetchUsersActionError;
