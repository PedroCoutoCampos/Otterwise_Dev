import "../components/Column.css";
import Task from "./Task";
const Column = ({
  icon,
  title,
  showIcon,
  showTitle,
  name,
  img,
  textButton,
}) => {
  return (
    <div className="geral">
      {showIcon && <p>{icon}</p>}
      {showTitle && <h3>{title}</h3>}
      <Task name={name} image={img} label={textButton}></Task>
    </div>
  );
};

export default Column;
