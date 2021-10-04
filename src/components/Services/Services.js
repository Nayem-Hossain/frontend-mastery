import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./coursesFakeData.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  });
  return (
    <div className="margin-top">
      <h2 className="my-3">Total Courses : {courses.length}</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((courseInfo) => (
          <div className="col">
            <div className="card h-100">
              <img
                src={courseInfo.img}
                className="card-img-top"
                alt={courseInfo.course_name}
              />
              <div className="card-body">
                <h6 className="card-title fw-bold">{courseInfo.course_name}</h6>
                <p className="card-text">{courseInfo.instructor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
