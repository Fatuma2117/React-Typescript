


import React from 'react'
import{ NewTaskInput} from './TaskInput'
import { useSelector, useDispatch } from "react-redux";
import { taskState } from "./taskReducer";


function App(){

  const tasks = useSelector<taskState, taskState["task"]>(
    (state) => state.task
  );


  const dispatch = useDispatch();

  const onAddTask = (task: string) => {
    dispatch({type: "ADD_TASK", payload: task});
  };
  return(
<>

<NewTaskInput addTask={onAddTask}/>

<ul>
        {tasks.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
</>
  )
}

export default App;