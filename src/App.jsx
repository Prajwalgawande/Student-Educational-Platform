import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import Subjects from "./components/subjects/Subjects";
import SubjectDetiles from "./components/subjects/SubjectDetilesTab";
import Meetings from "./components/meetings/Meetings";
import NoticeBoard from "./components/notice-board/NoticeBoard";
import ChatsTab from './components/chats-tab/ChatsTabs'
import DetilesTab from './components/detiles-tab/DetilesTab'
import NotesTab from './components/notes-tab/NotesTab'
import AssignmentTab from './components/assignment-tab/AssignmentTab'

const Dashboard = () => <h1>Dashboard</h1>;
const Content = () => <h1>Content</h1>;
const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;
const Webinars = () => <h1>Webinars</h1>;



// const DetailsComponent = () => <div><SubjectDetiles/>Discussion component content</div>;
// const Discussion = () => <div>Discussion component content</div>;
// const Notes = () => <div>Notes component content</div>;
// const Assignments = () => <div>Assignments component content</div>;

function App() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 991.98px)' });
  console.log("screensmal",isSmallScreen);
  const [inactive, setInactive] = useState(isSmallScreen);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />

        <div className={`container`}
          style={!inactive ? { marginLeft: "300px", width: "72vw" } :
            { marginLeft: "40px", width: "100%" }}>

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
            <Route path="/" element={<NoticeBoard />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subject/:subjectId" element={<SubjectDetiles />} />
            <Route path="/content" element={<Content />} />
            <Route path="/content/courses" element={<Courses />} />
            <Route path="/content/videos" element={<Videos />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/content-2" element={<Content2 />} />
            <Route path="/content-2/courses" element={<Courses2 />} />
            <Route path="/content-2/videos" element={<Videos2 />} />
            <Route path="/design-2" element={<Design2 />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path={`/subject/:subjectId/details`} element={<DetilesTab />} />
            <Route path={`/subject/:subjectId/discussion`} element={<ChatsTab />} />
            <Route path={`/subject/:subjectId/notes`} element={<NotesTab />} />
            <Route path={`/subject/:subjectId/assignments`} element={<AssignmentTab />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
