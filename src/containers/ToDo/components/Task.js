const Task = (props) => {
  return (
    <div className="tasks">
      <div className="task" >
        <div className="item">{props.text}</div>
        <button className="btn" onClick={props.removeHandler} >Remove</button>
      </div>
    </div>
  );
};
export default Task;