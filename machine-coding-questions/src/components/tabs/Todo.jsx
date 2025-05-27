"use client";

import React, { useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const item = {
      id: Math.floor(Math.random() * 123903765),
      val: input,
      completed: false,
    };

    setTodos((td) => [...td, item]);
    setInput("");
  };

  const handleCheckedTodo = (id) => {
    setTodos(
      todos.map((td) => {
        if (td.id == id) {
          return {
            ...td,
            completed: !td.completed,
          };
        } else return td;
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((val) => val.id !== id));
  };

  return (
    <div className="flex justify-center flex-col items-center gap-10">
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Todo"
          className="border rounded-sm p-1"
          autoFocus
        />
        <button
          className="px-2 py-1 rounded-sm border cursor-pointer"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      <div className="">
        {todos.map((todo) => (
          <li className="list-none flex gap-5 mt-5 items-center" key={todo.id}>
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={() => handleCheckedTodo(todo.id)}
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.val}
            </span>
            {!todo.completed && (
              <button
                className="border px-2 cursor-pointer rounded-sm"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </div>
    </div>
  );
};
