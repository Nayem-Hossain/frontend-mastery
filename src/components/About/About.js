import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="container margin-top">
      <div className="mt-5 row justify-content-evenly">
        <div className="col-md-3 justify-content-around">
          <div className="d-flex border-bottom ">
            <div>
              <i className="fas fa-map-marker-alt icon-style-about"></i>
            </div>
            <div>
              <h2>Location</h2>
              <h4>4967 Sardis Sta, Victoria 8007, Montreal.</h4>
              <h4>+1 246-345-0695</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 justify-content-around ">
          <div className="d-flex border-bottom ">
            <div>
              <i className="fas fa-phone-square-alt icon-style-about"></i>
            </div>
            <div>
              <h2>Phones:</h2>
              <h4>01677863720</h4>
            </div>
          </div>
        </div>

        <div className="d-flex col-md-3 justify-content-around">
          <div className="d-flex border-bottom">
            <div>
              <i className="fas fa-envelope icon-style-about"></i>
            </div>
            <div>
              <h2>Email:</h2>
              <h4>nayem.hossain7298@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-white-5 bg-cus text-center-1 mt-5">
        <h1>Send Your Message</h1>
        <p>
          <h3>
            Fill out this form and our specialists will contact you shortly for
            detailed consultation.
          </h3>
        </p>
        <form id="survey-form">
          <div className="form-group">
            <label id="name-label" for="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label id="email-label" for="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className="form-group">
            <label id="age-label" for="age">
              Age<span className="clue">(optional)</span>
            </label>
            <input
              type="number"
              name="age"
              id="age"
              min="10"
              max="99"
              className="form-control"
              placeholder="Age"
            />
          </div>

          <div className="form-group">
            <label id="number-label" for="number">
              Phone Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              className="form-control"
              min="0"
              max="9"
              placeholder="Enter your Phone-Number"
              required
            />
          </div>

          <div className="form-group">
            <p>Which option best describes your current role?</p>
            <select id="dropdown" name="role" className="form-control" required>
              <option disabled selected value="">
                Select current role
              </option>
              <option value="student">Student</option>
              <option value="job">Full Time Job</option>
              <option value="learner">Full Time Learner</option>
              <option value="preferNo">Prefer not to say</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <p>Gender</p>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="input-radio"
                checked
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="input-radio"
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="input-radio"
              />
              Other
            </label>
          </div>

          <div className="form-group ">
            <p>Any comments or suggestions?</p>
            <textarea
              name="comments"
              id="comments"
              className="input-textarea w-75"
              placeholder="Enter your comment here..."
            ></textarea>
          </div>

          <Link to="/home">
            <button className="fw-bold btn btn-danger mb-4 px-5">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default About;
