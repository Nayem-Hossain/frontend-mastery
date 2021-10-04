import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./coursesFakeData.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  });

  return (
    <div className="margin-top">
      {/* banner section */}
      <section className="banner size">
        <div className="text-white">
          <h1 className="fw-bolder headline">Learn without Limits</h1>
          <p>
            We Offer the Most Complete Course Package in the world for recharce
            design and development
          </p>
        </div>
        <div className="mt-5">
          <form className="input-group py-2" style={{ width: "45rem" }}>
            <input
              className="form-control"
              type="search"
              placeholder="For Latest News Subscribes With Your Email"
              aria-label="Search"
            />
            <button
              className="btn bg-warning text-white btn-width"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* best courses section */}
      <section>
        <h2 className="my-3 fw-bolder mb-4">Our Best Selling Courses</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.slice(0, 6).map((bestCourse) => (
            <div className="col">
              <div className="card h-100">
                <img
                  src={bestCourse.img}
                  className="card-img-top"
                  alt={bestCourse.course_name}
                />
                <div className="card-body">
                  <h6 className="card-title fw-bold">
                    {bestCourse.course_name}
                  </h6>
                  <p className="card-text">{bestCourse.instructor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-center'>
          <Link to="/Services">
            <button className="fw-bold btn btn-danger my-4 button">
              View More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
{
  /* // enrole={enroleEventHandler} */
}
export default Home;
