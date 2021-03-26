import {TodoActionTypes} from '../store/reducers/constants'

export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODO
}

export interface FetchTodoActionSuccess {
  type: TodoActionTypes.FETCH_TODO_SUCCESS,
   payload: any[]
}

export interface FetchTodoActionError {
  type: TodoActionTypes.FETCH_TODO_ERROR,
  payload: string
}

export interface SetTodoPageAction {
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: number
}

export type TodoAction  = 
  FetchTodoAction 
  | FetchTodoActionSuccess  
  | FetchTodoActionError
  | SetTodoPageAction
