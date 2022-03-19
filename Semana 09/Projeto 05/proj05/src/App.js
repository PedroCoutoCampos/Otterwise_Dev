import "./App.css";
import Column from "./components/Column";
import Title from "./components/Title";
import iconToDo from "./icons/columnOne/iconToDo.svg";
import iconInprogress from "./icons/columnTwo/iconInProgress.svg";
import iconReview from "./icons/columnTree/iconReview.svg";
import Female from "./icons/columnOne/Female.svg"
import FemaleTwo from "./icons/columnTwo/FemaleTwo.svg"

function App() {
  return (
    <div>
      <Title></Title>
      <div className="card">
        {/* COLUNA 1 */}
        <div className="card cardOne">
          <Column
            name="Christmas Banners"
            showIcon={true}
            showTitle={true}
            icon={<img src={iconToDo} alt="To Do" />}
            title="To Do"
            img ={<img src={Female} alt="Female"></img>}
            textButton = {<button className="button bOne">Label</button>}
          ></Column>
          <Column
            showIcon={false}
            showTitle={false}
            name="Redo Portfolio"
            img ={<img src={Female} alt="Female"></img>}
            textButton = {<button className="button bOne">Label</button>}

          ></Column>
          </div>

                  {/* COLUNA 2 */}

          <div className="card cardTwo">
            <Column
              name="Coffee Break"
              showIcon={true}
              showTitle={true}
              icon={<img src={iconInprogress} alt="In Progress" />}
              title="In Progress"
              img={<img src={FemaleTwo} alt="FemaleTwo"></img>}
              textButton = {<button className="button bTwo">Always</button>}

            ></Column>
            <Column
              showIcon={false}
              showTitle={false}
              name="Updating Portfolio"
              img={<img src={FemaleTwo} alt="FemaleTwo"></img>}
              textButton = {<button className="button bTwo">Webflow</button>}
            ></Column>
          </div>

                  {/* COLUNA 3 */}

          <div className="card cardTree">
            <Column
              name="Release to Figma Community"
              showIcon={true}
              showTitle={true}
              icon={<img src={iconReview} alt="Review" />}
              title="Review"
              img={<img src={Female} alt="Female"></img>}
              textButton = {<button className="button bTree">Release</button>}

            ></Column>
            <Column
              showIcon={false}
              showTitle={false}
              name="User Feedback"
              img={<img src={Female} alt="Female"></img>}
              textButton = {<button className="button bTree">Feedback</button>}
            ></Column>
            <Column
              showIcon={false}
              showTitle={false}
              name="Background images from humaaans.com"
              img={<img src={Female} alt="Female"></img>}
              textButton = {<button className="button bTree">Sourcing</button>}
            ></Column>
          </div>
        </div>
      </div>
  );
}

export default App;
