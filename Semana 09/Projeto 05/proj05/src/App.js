import "./App.css";
import Column from "./components/Column";
import Title from "./components/Title";
import iconToDo from "./icons/iconToDo.svg";
function App() {
  return (
    <div>
      <Title></Title>
      <div className="card">
        <Column name = "Christmas Banners"showIcon={true} showTitle={true} icon={<img src={iconToDo} alt="To Do" />} title="To Do">
        </Column>
          <Column showIcon={false} showTitle={false} name = "Redo Portfolio">
        </Column>
      </div>
    </div>
  );
}

export default App;
