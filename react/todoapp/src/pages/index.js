import Header from "@/components/header";
import Footer from "@/components/footer";
import Form from "@/components/form";
import List from "@/components/list";
import AppFooter from "@/components/appfooter";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [filter, setFilter] = useState("all");

  return (
    <>
      <div className="todoapp">
        <Header />
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <List
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          filter={filter}
        />
        <AppFooter
          todos={todos}
          setTodos={setTodos}
          counter={counter}
          setCounter={setCounter}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <Footer />
    </>
  );
}
