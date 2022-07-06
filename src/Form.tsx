import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<FormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
    console.log('submit todo')
  };

  return (
    <form>
      <input value={newTodo} onChange={handleChange} />
      <button onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};
