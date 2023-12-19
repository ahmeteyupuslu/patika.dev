import React from "react";

function List({ todos, setTodos, filter }) {
  const completedHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  //todoların solundaki butona tıklayarak tamamlandı tamamlanmadı seçimi için kullanılan const.

  const allCompleteHandler = () => {
    setTodos(
      todos.map((todo) =>
        todo.isCompleted ? todo : { ...todo, isCompleted: !todo.isCompleted }
      )
    );
  };
  //todoların eklendiği kutunun solundaki okun bütün todoların tamamlandı olarak işaretlenmesini sağlar.

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //todonun sağındaki çarpı işareti o to-do id'sine sahip todonun silinmesini sağlar.

  const filtered = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "completed") {
      return todo.isCompleted;
    } else {
      return !todo.isCompleted;
    }
  });
  //appfooter.js içinde oluşturulan all,active,completed seçenekleri ile  filter değeri ayarlanır ve gösterecek todoları ekrana getirir.

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label onClick={allCompleteHandler} htmlFor="toggle-all">
          Mark all as complete
        </label>

        <ul className="todo-list">
          {filtered.map((todo) => (
            <li
              key={todo.id}
              className={`${todo.isCompleted ? "completed" : ""}`}
            >
              <div className="view">
                <input
                  onClick={() => completedHandler(todo.id)}
                  className="toggle"
                  checked={todo.isCompleted}
                  type="checkbox"
                  readOnly
                />
                <label>{todo.inputText}</label>
                <button
                  onClick={() => deleteHandler(todo.id)}
                  className="destroy"
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default List;
