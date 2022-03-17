import "../components/Column.css";

const Column = (props) => {
  const { icon, title } = props;
  return (
    <div className="titleColumn">
      <p>{icon}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default Column;
