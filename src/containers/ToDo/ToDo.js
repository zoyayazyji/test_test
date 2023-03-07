import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { Title } from "./components/Title"
import "./Todo.css";

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [listTodo, setListTodo] = useState([
    { task: "Buy a milk", id: Math.random() * 666 },
    { task: "Do homework", id: Math.random() * 666 }
  ]);

  return (
    <div className="todo_container">
      <Title
        text="List ToDo"
      />
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        listTodo={listTodo}
        setListTodo={setListTodo}
      />
      <List
        listTodo={listTodo}
        setListTodo={setListTodo}
      />
    </div>
  );
};

export default ToDo;
