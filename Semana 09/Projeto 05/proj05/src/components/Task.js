import "./Task.css";

const Task = (props) => {
    const { title, icon, text } = props;
    return (
      <div className="Task">
        <p>{title}</p>
        <h3>{icon}</h3> 
        <button>{text}</button>

      </div>
    );
  };
  
  export default Task;
