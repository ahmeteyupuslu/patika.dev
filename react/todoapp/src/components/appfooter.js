import { useEffect } from "react";
import React from "react";

function AppFooter({
  todos,
  setTodos,
  counter,
  setCounter,
  filter,
  setFilter,
}) {
  useEffect(() => {
    let count = 0;
    todos.forEach((todo) => {
      if (todo.isCompleted === false) {
        count++;
      }
    });
    setCounter(count);
  });
  //yapılmayan todoları saymak için hazırlanan counter.

  const deleteAllHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  //tamamlanan todoların temizlenmesi için kullanılan const

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{counter + " "}</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              onClick={() => setFilter("all")}
              className={`${filter === "all" ? "selected" : ""}`}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => setFilter("active")}
              className={`${filter === "active" ? "selected" : ""}`}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => setFilter("completed")}
              className={`${filter === "completed" ? "selected" : ""}`}
            >
              Completed
            </a>
          </li>
        </ul>

        <button onClick={deleteAllHandler} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default AppFooter;
