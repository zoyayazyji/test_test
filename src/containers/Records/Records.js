import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { Title } from "./components/Title"
import "./Records.css";

const Records = () => {
  const [inputValue, setInputValue] = useState("");
  const [records, setRecords] = useState([]);
  const [edit, setEdit] = useState(false)

  return (
    <>
      <Title
        text="Personal Records"
      />
      <div className="records_container">
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          records={records}
          setRecords={setRecords}
        />
        <List
          records={records}
          setRecords={setRecords}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
    </>
  );
};

export default Records;
