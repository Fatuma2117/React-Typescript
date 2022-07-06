import React from "react";
import { ListItem } from './ListItem';

interface ListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<ListProps> = ({ todos, toggleComplete }) => {
  return (
    <ul>
     {todos.map(todo => (
       <ListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
         
        />
     ))}
    </ul>
  );
};