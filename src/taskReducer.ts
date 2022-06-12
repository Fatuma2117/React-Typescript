


export interface taskState {
  task: string[]
}

const initialState = {
  task: []
}

type Action = {type: "ADD_TASK" , payload: string}


export const taskReducer = (state:taskState = initialState, action: Action) => {
  switch(action.type){
    case "ADD_TASK": {
      return {...state, task: [...state.task, action.payload]}
    }
    default:
      return state
  }
}
