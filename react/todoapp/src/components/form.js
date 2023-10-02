import React from "react";

function Form({ inputText, setInputText, todos, setTodos }) {
  function handleSubmit(e) {
      const newTodo = {
        inputText,
        id: Date.now(),
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
      e.preventDefault();
    };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
