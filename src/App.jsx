import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  return (
    <div>
      <h1 style={{ color: " rgb(255, 11, 174)" }}>Student List</h1>
      <ul>
        {students.map((student) => (
          <li
            style={{
              backgroundColor: "pink",
              color: "white",
              margin: "10px",
              width: "50%",
              height: "50%",
              fontSize: "150%",
              padding: "10px",
              borderColor: "rgb(216, 15, 149)",
              border: "dotted",
              borderWidth: "10px",
            }}
          >
            Student name : {student.name} <br />
            Age: {student.age} <br />
            Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
