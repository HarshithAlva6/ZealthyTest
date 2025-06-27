'use client'

import React, {useState} from 'react'
type Todo = {
  id: number,
  text: string,
  completed: boolean
}
export default function Home() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo: Todo = {
      id:Date.now(),
      text: input,
      completed: true
    }
    setTodo([newTodo, ...todo]);
    setInput("");
  }
  const updateTodo = (id: number, newText: string) => {
    setTodo(
      todo.map((eachTodo) => {
        if (eachTodo.id === id) {
          return {...eachTodo, text: newText};
        }
        return eachTodo;
      }));
    }
  const deleteTodo = (id: number) => {
    setTodo(todo.filter((eachTodo) => eachTodo.id !== id));
    setInput("")
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>Todo List</h2>
      <input 
      value = {input}
      onChange = {(e) => setInput(e.target.value)}
      placeholder = "Enter your list input"
      />
      <button onClick={addTodo}>Add</button>
      {todo.map((eachTodo) => (
        <div key = {eachTodo.id}>
        <input
         value={eachTodo.text}
         onChange={(e) => updateTodo(eachTodo.id, e.target.value)}
        />
        <button onClick={() => deleteTodo(eachTodo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
