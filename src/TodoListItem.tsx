import React from "react";
import {Todo} from './types'
import "./ListItem.css"


interface ItemProps {
    todo: Todo;
    toggleTodo: (selectedTodo: Todo) => void;
}




export const TodoListItem: React.FC<ItemProps> = ({todo, toggleTodo}) => {
    return (
    <li>
        <label
        className={todo.complete ? "complete" : undefined}
        // style={{ textDecoration: todo.complete ? "line-through" : "none"}}
        >
            <input type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}/>
             {todo.text}
        </label>
    </li>
    )
};