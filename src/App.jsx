import HomeScreen from "../src/screen/home/HomeScreen.jsx";
import AboutScreen from "../src/screen/about/AboutScreen.jsx";
import TeacherListScreen from "../src/screen/teacher/TeacherListScreen.jsx";
import MainContainer from "../src/screen/container/MainContainer.jsx";
import StudentScreen from "../src/screen/student/StudentScreen.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassRoom from "./screen/class_room/ClassRoom.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainContainer>
          {/* Register Route */}
          <Routes>
            {/* <Route path="/" element={<HomeScreen />} /> */}
            <Route path="/" Component={HomeScreen} />
            <Route path="/teacher" Component={TeacherListScreen} />
            <Route path="/student" Component={StudentScreen} />
            <Route path="/class-room" Component={ClassRoom} />
            <Route path="/about" Component={AboutScreen} />
            <Route path="*" element={<h1>Route not found</h1>} />
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
