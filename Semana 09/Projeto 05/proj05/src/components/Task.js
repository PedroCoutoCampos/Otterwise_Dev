import "./Task.css";

const Task = ({ name, image, label }) => {
  return (
    <div className="name">
      <p>{name}</p>
      <div className="descrisao">
        <p className="linha2">{image}</p>
        <p className="linha3">{label}</p>
      </div>
    </div>
  );
};

export default Task;
