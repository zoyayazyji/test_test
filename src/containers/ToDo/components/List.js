import React, { useEffect } from 'react';
import "./List.css"
import Task from "./Task"

const List = (props) => {

  useEffect(() => {
    fetch("https://js8-zoya-yazyji-default-rtdb.firebaseio.com" + "/todo.json")?.then(response => {
      response.json()?.then(tasks => {
        const tasksArr = Object.keys(tasks)?.map(taskId => {
          return { id: taskId, ...tasks[taskId] }
        })
        let lastArr = tasksArr[tasksArr.length - 1]
        props.setListTodo(lastArr?.item)
      })
    });
  }, []);

  let arr = [];
  const RemoveHandler = (index) => {
    fetch("https://js8-zoya-yazyji-default-rtdb.firebaseio.com" + "/todo.json").then(response => {
      response.json().then(tasks => {
        const tasksArr = Object.keys(tasks)?.map(taskId => {
          return { id: taskId, ...tasks[taskId] }
        });
        let lastArr = tasksArr[tasksArr?.length - 1]
        fetch("https://js8-zoya-yazyji-default-rtdb.firebaseio.com" + "/todo/" + lastArr.id + "/item/" + index + "/.json", {
          method: "DELETE",
        })
        let items = [...props.listTodo.slice(0, index), ...props.listTodo.slice(index + 1)]
        items.forEach((item) => {
          if (item !== null) {
            arr.push(item);
          }
        })
        props.setListTodo(arr)
      })
    });
  }

  return (
    <div className="list_todo">
      <ol className="list">
        {props.listTodo?.length >= 1 ? props.listTodo.map((todo, i) => (
          <Task
            setListTodo={props.setListTodo}
            listTodo={props.listTodo}
            key={todo?.id}
            todo={todo}
            text={todo?.task}
            removeHandler={() => RemoveHandler(i)}
          />
        )) : null
        }
      </ol>
    </div>
  );
};

export default List;