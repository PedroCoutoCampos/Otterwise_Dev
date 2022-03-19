import "../components/Column.css";
import Task from "./Task";
import Female from "../icons/Female.svg"
const Column = ({ icon, title, showIcon, showTitle, name}) => {
  return (
    <div className="geral">
        {showIcon && <p>{icon}</p>}
        {showTitle && <h3>{title}</h3>}
        <Task name={name}
        image={<img src={Female} alt="Female"></img>} label ={<button className="button">Label</button>}>
        </Task>
        </div>
  );
};

export default Column;
