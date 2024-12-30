import Home from "./screen/home/Home.jsx";
import About from "../src/screen/about/About.jsx";
import TeacherList from "./screen/teacher/Teacher.jsx";
import MainContainer from "../src/screen/container/MainContainer.jsx";
import Student from "./screen/student/Student.jsx";
import ClassRoom from "./screen/class_room/ClassRoom.jsx";
import Course from "../src/screen/course/Course.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
// Register route/Active tabs
const TabNav = () => {
  const location = useLocation();
  return (
    <div className="flex *:p-2 bg-blue-600 text-white font-serif">
      <Link
        to="/"
        className={`!pl-5 ${location.pathname === "/" ? "bg-blue-900" : ""}`}
      >
        Home
      </Link>
      <Link
        className={`${location.pathname === "/teacher" ? "bg-blue-900" : ""}`}
        to="/teacher"
      >
        Teacher
      </Link>
      <Link
        className={`${location.pathname === "/student" ? "bg-blue-900" : ""}`}
        to="/student"
      >
        Student
      </Link>
      <Link
        className={`${
          location.pathname === "/class-room" ? "bg-blue-900" : ""
        }`}
        to="/class-room"
      >
        Class Room
      </Link>
      <Link
        className={`${location.pathname === "/course" ? " bg-blue-900" : ""}`}
        to="/course"
      >
        Course
      </Link>
      <Link
        className={`${location.pathname === "/about" ? "bg-blue-900" : ""}`}
        to="/about"
      >
        About us
      </Link>
    </div>
  );
};
function App() {
  return (
    <>
      <BrowserRouter>
        {/* Tabs */}
        <TabNav />
        {/* <MainContainer> */}
        {/* Register Route */}
        <Routes>
          {/* <Route path="/" element={<HomeScreen />} /> */}
          <Route path="/" Component={Home} />
          <Route path="/teacher" Component={TeacherList} />
          <Route path="/student" Component={Student} />
          <Route path="/class-room" Component={ClassRoom} />
          <Route path="/course" Component={Course} />
          <Route path="/about" Component={About} />
          <Route path="*" element={<h1>Route not found</h1>} />
        </Routes>
        {/* </MainContainer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
