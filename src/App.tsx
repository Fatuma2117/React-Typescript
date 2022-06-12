


import React from 'react'
import './App.css';

import{ NewTaskInput} from './TaskInput'
import { useSelector, useDispatch } from "react-redux";
import { taskState } from "./taskReducer";
import { addTask } from "./actions";



function App(){

  const tasks = useSelector<taskState, taskState["task"]>(
    (state) => state.task
  );


  const dispatch = useDispatch();

  const onAddTask = (task: string) => {
    dispatch(addTask(task));

    
  };
  return(
<div className="todo-app">
<h1>Todo List: </h1>
<NewTaskInput addTask={onAddTask}/>

<ul>
        {tasks.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
</div>
  )
}

export default App;