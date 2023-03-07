import BackDrop from "../BackDrop/BackDrop";
import loaderIcon from "../../../assets/img/preloader.png"
import "./Loader.css";

const Loader =({loading}) => {

  return loading ?
    <>
    <BackDrop show={true}/>
    <img src={loaderIcon} className="Loader"/>
    </> : null
  
};

export default Loader;