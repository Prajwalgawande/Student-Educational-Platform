import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import Subjects from "./components/subjects/Subjects";
import SubjectDetiles from "./components/subjects/SubjectDetilesTab";
import Meetings from "./components/meetings/Meetings";
import NoticeBoard from "./components/notice-board/NoticeBoard";
import ChatsTab from './components/chats-tab/ChatsTabs'
import DetilesTab from './components/detiles-tab/DetilesTab'
import NotesTab from './components/notes-tab/NotesTab'
import AssignmentTab from './components/assignment-tab/AssignmentTab'
import TopNavbar from "./components/Navbar/Navbar";
import Webinars from "./components/Webinars/Webinars";
import WebinarDetail from "./components/webinar-detiles/WebinarDetiles";
import ProfilePage from "./components/profile-page/Profile";
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

const Content = () => <h1>Content</h1>;
const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;


function App() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 991.98px)' });
  console.log("screensmal", isSmallScreen);
  const [inactive, setInactive] = useState(isSmallScreen);
  const [validuser, setValiduser]=useState(false);
  const navigate = useNavigate();
  const authenticationflag=(flag)=>{
    setValiduser(flag);
  }
  useEffect(() => {
    let url=window.location.pathname;
    console.log(url);
    if (!validuser && url!=='/signup' ) {
      navigate('/login');
    }
  }, [validuser, navigate]);
  return (
    <div className="App">
      {!validuser && 
        <Routes>
        <Route path="/login" element={<Login authvalidation={authenticationflag}/>} />
        <Route path="/signup" element={<Signup authvalidation={authenticationflag}/>} />
        </Routes>}
      {validuser &&<>
        <SideMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
          authvalidation={authenticationflag}
        />
        <div className={`container`}
          style={!inactive ? { marginLeft: "300px", width: "72vw" } :
            { marginLeft: "40px", width: "100%" }}>

          <TopNavbar  authvalidation={authenticationflag} />
          
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
            <Route path="/profile/:userid" element={<ProfilePage />} />
            <Route path="/content-2" element={<Content2 />} />
            <Route path="/content-2/courses" element={<Courses2 />} />
            <Route path="/content-2/videos" element={<Videos2 />} />
            <Route path="/design-2" element={<Design2 />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/webinars/:id" element={<WebinarDetail />} />
            <Route path={`/subject/:subjectId/details`} element={<DetilesTab />} />
            <Route path={`/subject/:subjectId/discussion`} element={<ChatsTab />} />
            <Route path={`/subject/:subjectId/notes`} element={<NotesTab />} />
            <Route path={`/subject/:subjectId/assignments`} element={<AssignmentTab />} />
          </Routes>
        </div>
        </>}
    </div>

  );
}

export default App;
