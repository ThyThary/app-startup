import React from "react";
import { Link } from "react-router-dom";
// const MainContainer = (props) => {
const MainContainer = ({ children }) => {
  return (
    <div className="w-full  text-center">
      <ul className="flex *:p-2 bg-blue-600 text-white font-serif">
        {/* Register Link */}
        <li className="hover:bg-blue-900 ml-10 border-r-2 broder-white">
          <Link to="/" className="">
            Home
          </Link>
        </li>

        <li className="hover:bg-blue-900">
          <Link to="/teacher">Teacher</Link>
        </li>
        <li className="hover:bg-blue-900">
          <Link to="/student">Student</Link>
        </li>
        <li className="hover:bg-blue-900">
          <Link to="class-room">Classroom</Link>
        </li>
        <li className="hover:bg-blue-900">
          <Link to="/about">About us</Link>
        </li>
      </ul>
      {/* {props.children} */}
      <div>{children}</div>
    </div>
  );
};
export default MainContainer;
