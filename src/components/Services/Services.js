import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Services.css";

const Services = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./coursesFakeData.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  });
  return (
    <div className="margin-top container-fluid">
      <h2 className="my-3">Total Courses : {courses.length}</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((allcourseInfo) => (
          <Course
            key={allcourseInfo.key}
            courseInformation={allcourseInfo}
          ></Course>
        ))}
      </div>
    </div>
  );
};

export default Services;
