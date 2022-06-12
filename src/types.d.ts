
// types declaration file 
// Automatic import to types call anywhere
export type Todo = {
    text: string;
    complete: boolean;
  };
  
 type ToggleTodo = (selectedTodo: Todo) => void;
