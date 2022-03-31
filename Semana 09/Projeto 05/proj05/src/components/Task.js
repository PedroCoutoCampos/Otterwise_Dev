import "./Task.css";

const Task = ({ image, label }) => {
  return (
      <div className="descrisao">
        <img className="image">{image}</img>
        <p className="label">{label}</p>
      </div>
    </div>
  );
};

export default Task;
