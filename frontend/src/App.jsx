import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Ingress API base path
  const API_URL = "/api";

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API_URL}/todos`);
      setTodos(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch todos:", err.message);
    }
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    try {
      await axios.post(`${API_URL}/todos`, { text });
      setText("");
      fetchTodos();
    } catch (err) {
      console.error("❌ Failed to add todo:", err.message);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await axios.put(`${API_URL}/todos/${id}`, {
        completed: !completed,
      });
      fetchTodos();
    } catch (err) {
      console.error("❌ Failed to toggle todo:", err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("❌ Failed to delete todo:", err.message);
    }
  };

  useEffect(() => {
    console.log("📡 Using API:", API_URL);
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>📝 My Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleTodo(todo._id, todo.completed)}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo._id)}
              className="delete-btn"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}