import React, {useState} from 'react';
import { TodoListItem } from "./TodoListItem";
import {Todo} from './types'

const testTodos: Array<Todo> =[
  {text: "cook dinner", complete: true},
  {text: "Fold Laundry", complete: false}
]




const App: React.FC = () =>{
  const [todos, setTodos] = useState(testTodos);

  const toggleTodo =( selectedTodo : Todo) =>{
    const newTodos = todos.map(todo =>{
      if (todo === selectedTodo){
        return{
          ...todo,
          completed: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };







  return (
    <React.Fragment>
<TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
<TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>


    </React.Fragment>


  )
 

    
    
}

export default App;
