const Task = ({ text, removeHandler, edit, setEdit, handleSubmit, handleChange }) => {
  return (
    <div className="records">
      {edit ? (
        <>
          <div className="record" >
            <div className="record_item">
              <form onSubmit={handleSubmit}>
                <p className="record_text">
                  <input className="input_records" value={text}
                    onChange={handleChange}
                    autoFocus /></p>
              </form>
              <div className="edit_btn_container">
                <p className="record_btn_save" type="submit" onClick={handleSubmit}>Save</p>
                <p className="record_btn_back" onClick={() => setEdit(false)} type="button">Back</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="record" >
          <div className="record_item">{text}</div>
          <div className="record_btn_container">
            <p className="record_btn" onClick={removeHandler} >Remove</p>
            <p className="record_btn" onClick={() => setEdit(true)} >Edit</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Task;

