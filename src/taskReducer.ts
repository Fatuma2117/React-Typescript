import {Action} from "./actions"


export interface taskState {
  task: string[]
}

const initialState = {
  task: []
}



export const taskReducer = (state:taskState = initialState, action: Action) => {
  switch(action.type){
    case "ADD_TASK": {
      return {...state, task: [...state.task, action.payload]}
    }
    default:
      return state
  }
}
