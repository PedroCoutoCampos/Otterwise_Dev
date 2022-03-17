import "./App.css";
import Column from "./components/Column";
import Title from "./components/Title";
import iconToDo from "./icons/iconToDo.svg";
import iconInProgress from "./icons/iconInProgress.svg";
import iconReview from "./icons/iconReview.svg";
import iconDone from "./icons/iconDone.svg";
import Female from "./icons/Female.svg";
import Task from "./components/Task";

function App() {
  return (
    <div>
      <Title></Title>
      <div className="card">
        <Column
          icon={<img src={iconToDo} alt="To Do" />}
          title="To Do">
        <Task
          title="Christmas Banners"
          icon={<img src={Female} alt="female" text="Label" />}
        ></Task>
        </Column>
        <Column
          icon={<img src={iconInProgress} alt="To Do" />}
          title="In Progress"
        />
        <Column icon={<img src={iconReview} alt="To Do" />} title="Review" />
        <Column icon={<img src={iconDone} alt="To Do" />} title="Done" />
      </div>
      
    </div>
  );
}

export default App;
