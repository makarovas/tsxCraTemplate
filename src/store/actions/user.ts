import axios from "axios"
import { Dispatch } from "redux"
import { UserAction } from "../../types/users"
import { UserActionTypes } from "../reducers/constants"

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
   try {
    dispatch(({type: UserActionTypes.FETCH_USERS}))
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setTimeout(() =>  
    dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data}), 1000)
   } catch(e) {
       dispatch(({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Error'}))
   }
  }
}