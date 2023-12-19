import React from "react";

function Form({ inputText, setInputText, todos, setTodos }) {
  function handleSubmit(e) {
    const newTodo = {
      inputText,
      id: Date.now(),
      isCompleted: false,
    };
    //her todo yapılacak görevi içeren text, id ve tamamlanma durumundan oluşuyor.
    setTodos([...todos, newTodo]); //önceki todoslara ekleme yapıldı.
    setInputText(""); //todos'un eklediği bölüm tekrar boş hale getirildi.
    e.preventDefault(); //submit yapıldığında sayfanın refresh edilmesi engellendi.
  }

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
