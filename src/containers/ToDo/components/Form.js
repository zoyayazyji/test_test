import "./Form.css";
import axios from "../../../axiosOrder";
import { useState } from "react";
import Loader from "../../../components/UI/Loader/Loader"

const Form = (props) => {
  const [loading, setLoading] = useState(false)
  const inputHandler = (event) => {
    props.setInputValue(event.target.value);
  };

  const taskHandler = async (event) => {
    event.preventDefault();
    props.setInputValue("");
    props?.setListTodo([...props?.listTodo, { task: props?.inputValue, id: Math.random() * 666 }]);

    const task = {
      item: [...props.listTodo, { task: props.inputValue, id: Math.random() * 666 }],
    }
    setLoading(true)
    try {
      await axios.post("/todo.json", task);
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }

  };
  return (
    <>
      <Loader loading={loading} />
      <form className="form"  >
        <input onChange={inputHandler} type="text" value={props.inputValue} ></input>
        <button className="add_btn" onClick={taskHandler}>Add</button>
      </form>
    </>
  );
};

export default Form;