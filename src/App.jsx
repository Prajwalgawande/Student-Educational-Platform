import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState } from "react";
import Subjects from "./components/subjects/Subjects";
import SubjectDetiles from "./components/subjects/SubjectDetiles";
import Meetings from "./components/meetings/Meetings";

const Dashboard = () => <h1>Dashboard</h1>;
const Content = () => <h1>Content</h1>;
const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />

        <div className={`container`} 
        style={!inactive?{ marginLeft:   "300px", width:"75vw" }:
        {marginLeft:"100px",width:"90vw"}}>
          
          <Routes>
            {/* {menuItems.map((menu) => (
              <Route
                key={menu.name}
                path={menu.to}
                element={<h1>{menu.name}</h1>}
              />
            ))}

            {menuItems.map((menu) =>
              menu.subMenus ? (
                menu.subMenus.map((subMenu) => (
                  <Route
                    key={subMenu.name}
                    path={subMenu.to}
                    element={<h1>{subMenu.name}</h1>}
                  />
                ))
              ) : null
            )} */}

            {/* Example routes with components */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subject/:subjectId" element={<SubjectDetiles/>} />
            <Route path="/content" element={<Content />} />
            <Route path="/content/courses" element={<Courses />} />
            <Route path="/content/videos" element={<Videos />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/content-2" element={<Content2 />} />
            <Route path="/content-2/courses" element={<Courses2 />} />
            <Route path="/content-2/videos" element={<Videos2 />} />
            <Route path="/design-2" element={<Design2 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
