import React, { useEffect } from 'react';
import "./List.css"
import Task from "./Task"

const List = ({ setRecords, records, edit, setEdit }) => {

  useEffect(() => {
    fetch("https://js8-zoya-yazyji-default-rtdb.firebaseio.com" + "/records.json")?.then(response => {
      response.json()?.then(tasks => {
        const tasksArr = Object.keys(tasks)?.map(taskId => {
          return { id: taskId, ...tasks[taskId] }
        })
        let lastArr = tasksArr[tasksArr.length - 1]
        setRecords(lastArr?.item)
      })
    });
  }, []);

  let arr = [];
  const RemoveHandler = (index) => {
    fetch("https://js8-zoya-yazyji-default-rtdb.firebaseio.com" + "/records.json").then(response => {
      response.json().then(tasks => {
        const tasksArr = Object.keys(tasks)?.map(taskId => {
          return { id: taskId, ...tasks[taskId] }
        });
        let lastArr = tasksArr[tasksArr?.length - 1]
        fetch("https://js8-zoya-yazyji-default-rtdb.firebaseio.com" + "/records/" + lastArr.id + "/item/" + index + "/.json", {
          method: "DELETE",
        })

        let items = [...records.slice(0, index), ...records.slice(index + 1)]
        items.forEach((item) => {
          if (item !== null) {
            arr.push(item);
          }
        })
        setRecords(arr)
      })
    });
  }

  const handleChange = (e) => {
    setRecords([{ task: e.target.value }])
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="list_records">
      <ol className="records_item_list">
        {records?.length >= 1 ? records.map((item, i) => (
          <Task
            setRecords={setRecords}
            records={records}
            key={item?.id}
            todo={item}
            text={item?.task}
            removeHandler={() => RemoveHandler(i)}
            handleChange={handleChange}
            handleSubmit={() => handleSubmit(i)}
            edit={edit}
            setEdit={setEdit}
          />
        )) : null
        }
      </ol>
    </div>
  );
};

export default List;