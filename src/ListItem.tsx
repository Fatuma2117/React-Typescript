import React from "react";

interface ItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const ListItem: React.FC<ItemProps> = ({ todo, toggleComplete }) => {
  return (
    <li className="list">
      {todo.text}
      <label>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
      </label>
    </li>
  );
};
