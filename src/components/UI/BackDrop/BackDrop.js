import "./BackDrop.css";

const BackDrop = ({show, click}) => {
  return show ? <div onClick={click} className="Backdrop"/> : null;
}

export default BackDrop