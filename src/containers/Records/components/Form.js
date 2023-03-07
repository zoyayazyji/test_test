import "./Form.css";
import axios from "../../../axiosOrder";
import { v4 as uuid } from "uuid";
import React, { useState } from 'react';
import Loader from "../../../components/UI/Loader/Loader";
import Task from "./Task";

const Form = ({ setInputValue, setRecords, records, inputValue, }) => {
  const [loading, setLoading] = useState(false)

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const taskHandler = async (event) => {
    event.preventDefault();
    setInputValue("");
    setRecords([...records, { task: inputValue, id: uuid() }]);
    const record = {
      item: [...records, { task: inputValue, id: uuid() }],
    }
    setLoading(true)
    try {
      await axios.post("/records.json", record);
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  };
  return (
    <>
      <Loader loading={loading} />
      <div className="records_form">
        <form className="form_records"  >
          <textarea onChange={inputHandler} value={inputValue} ></textarea>
        </form>
        <button className="records_add_btn" onClick={taskHandler}>Add</button>
      </div>
      
    </>
  );
};

export default Form;