import React from "react";
import { Link } from "react-router-dom";
// const MainContainer = (props) => {
const MainContainer = ({ children }) => {
  return (
    <div className=" text-center">
      <ul className="">
        {/* Register Link */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/teach">Teacher</Link>
        </li>
        <li>
          <Link to="/student">Student</Link>
        </li>
        <li>
          <Link to="class-room">Classroom</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
      </ul>
      {/* {props.children} */}
      {children}
    </div>
  );
};
export default MainContainer;
