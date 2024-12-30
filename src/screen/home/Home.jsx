import React, { useState } from "react";
import onlyEn from "../../js/validation/onlyEn.js";

function HomeScreen() {
  // const [id, setId] = useState(0);
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [salary, setSalary] = useState();
  const [arrEmployee, setarrEmloyee] = useState([]);
  // Add employee
  const handleAdd = () => {
    // let number = 0;
    // setId(number + 1);
    // console.log(id);
    var employee = {
      // id: id,
      fname: fName,
      lname: lName,
      gender: gender,
      salary: salary,
    };
    var arrTemp = [...arrEmployee, employee];
    setarrEmloyee(arrTemp);
  };
  const handleRemove = () => {};
  return (
    <div className="flex h-[592px] font-serif bg-white">
      <div className="flex w-1/2 justify-center items-center text-center">
        <div className=" w-[350px] h-[400px] bg-slate-300 rounded-md shadow-neutral-2000">
          <div className=" mt-3">
            <label htmlFor="employeefrm" className=" font-extralight text-xl">
              Employee Form
            </label>
          </div>
          <div className="grid grid-cols-1 m-5">
            <div className="grid">
              <label htmlFor="" className="text-left font-serif ">
                First Name
              </label>
              <input
                className=" rounded-md px-2 py-1.5 my-1 border border-blue-500 outline-none"
                type="text"
                name="fName"
                id="fName"
                value={fName}
                onChange={(e) => setFname(e.target.value)}
                placeholder="Input first name"
              />
            </div>
            <div className="grid">
              <label htmlFor="" className="text-left font-serif">
                Last Name
              </label>
              <input
                className=" rounded-md px-2 py-1.5 my-1 border border-blue-500 outline-none"
                type="text"
                name="lName"
                id="lName"
                value={lName}
                onChange={(e) => setLname(e.target.value)}
                placeholder="Input last name"
              />
            </div>
            <div className="grid">
              <label htmlFor="gender" className=" text-left font-serif">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="rounded-md px-2 py-1.5 my-1 border border-blue-500 outline-none"
              >
                <option value="" disabled selected>
                  Select...
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="grid">
              <label htmlFor="" className="text-left font-serif">
                Salary
              </label>
              <input
                className=" rounded-md px-2 py-1.5 my-1 border border-blue-500 outline-none"
                type="text"
                name="salary"
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="0.00"
              />
            </div>
            <div className="grid mt-2">
              <button
                className=" bg-blue-500 rounded-md font-serif font-bold text-white px-2 py-1.5 my-1 hover:bg-sky-600"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-r border-yellow-500"></div>
      <div className=" w-1/2">
        <div className="relative overflow-x-auto rounded-lg m-10 border border-gray-200">
          <table className="text-center w-full text-sm *:whitespace-nowrap text-black">
            <thead className="">
              <tr className="*:py-2.5 *:px-3 bg-slate-300">
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="odd:bg-slate-50">
              {arrEmployee.map((items, index) => {
                return (
                  <tr className=" hover:bg-gray-100 *:py-1 *:px-3 font-serif border-b dark:border-gray-400 ">
                    <td>{index + 1}</td>
                    <td>
                      {items.fname} {items.lname}
                    </td>
                    <td>{items.gender}</td>
                    <td>${items.salary}</td>
                    <td className="w-24">
                      <button
                        onClick={handleRemove}
                        className=" bg-red-500 rounded-md text-white py-1.5 px-2 hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
