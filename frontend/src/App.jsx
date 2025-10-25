import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // For Local deployment
  //const API_URL = "http://localhost:5000";

  // For Kubernetes deployment
  //const API_URL = "http://20.246.192.224:5000";

  const API_URL = import.meta.env.VITE_API_URL;



  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/todos`);
      setTodos(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch todos:", err.message);
    }
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    try {
      await axios.post(`${API_URL}/api/todos`, { text });
      setText("");
      fetchTodos();
    } catch (err) {
      console.error("❌ Failed to add todo:", err.message);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await axios.put(`${API_URL}/api/todos/${id}`, {
        completed: !completed,
      });
      fetchTodos();
    } catch (err) {
      console.error("❌ Failed to toggle todo:", err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/todos/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("❌ Failed to delete todo:", err.message);
    }
  };

  useEffect(() => {
    console.log("📡 Using API:", API_URL); // helpful debug log
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
