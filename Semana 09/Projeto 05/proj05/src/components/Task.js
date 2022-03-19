import "./Task.css";

const Task = ({ name, image, label }) => {
  return (
    <div className="name">
      <p>{name}</p>
      <div className="descrisao">
        <p className="image">{image}</p>
        <p className="label">{label}</p>
      </div>
    </div>
  );
};

export default Task;
