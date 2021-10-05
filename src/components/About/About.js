import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section className="container margin-top">
      <div className="text-center">
        <h1 className='fw-bold'>Contact Us</h1>
        <h5>Any questions or remarks? Just write us a message.</h5>
      </div>
      <div className="row border border-5 rounded-3 mt-3 contactInfo">
        <div className="col">
          <div className="text-center text-white fw-bold topMargin bottomMargin">
            <h1 className='text-heading'>Contact Information</h1>
          </div>
          <div className="text-white m-5">
            <div className="d-flex border-bottom mb-5">
              <div className='me-1'>
                <i class="fas fa-map-marker-alt icon-bg-style"></i>
              </div>
              <div>
                <h2>Location:</h2>
                <h4>4967 Sardis Sta, Victoria 8007, Montreal.</h4>
                <h4>United States of America</h4>
              </div>
            </div>

            <div className="d-flex border-bottom mb-5">
              <div className='me-1'>
                <i class="fas fa-phone-volume icon-bg-style"></i>
              </div>
              <div>
                <h2>Phones:</h2>
                <h4>+1 246-345-0695</h4>
              </div>
            </div>

            <div className="d-flex border-bottom mb-5">
              <div className='me-1'>
                <i class="fas fa-paper-plane icon-bg-style"></i>
              </div>
              <div>
                <h2>Email:</h2>
                <h4>Info@fronttendmastery.Com</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col p-5 card m-5 info-submit">
          <div className="text-center border-bottom border-5 mt-3 mb-5">
            <h3>Send Your Message</h3>
            <h6>
              Fill out this form and our specialists will contact you shortly
              for detailed consultation.
            </h6>
          </div>
          <form>
            {/* name feild */}
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
              />
            </div>

            {/* email feild */}
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            {/* phone number */}
            <div className="mb-3">
              <label for="phone" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                aria-describedby="phoneHelp"
              />
            </div>
            {/* age section */}
            <div className="mb-3">
              <label for="age" className="form-label">
                Age (optional)
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                aria-describedby="ageHelp"
              />
            </div>
            {/* radio button for select male or female */}
            <div className="mb-3">
              <p className="mb-1">Gender</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  checked
                />
                <label className="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                />
                <label className="form-check-label" for="female">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="other"
                  id="other"
                />
                <label className="form-check-label" for="other">
                  Other
                </label>
              </div>
            </div>

            {/* select role */}
            <div className="mb-3">
              <p className="mb-1">
                Which option best describes your current role?
              </p>
              <select
                className="form-select"
                aria-label="Default select example"
              >
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

            {/* comments section */}
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
              <label for="floatingTextarea2">Comments</label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Agree to terms and conditions
              </label>
            </div>

            <Link to="/home">
              <button
                type="submit"
                className="btn btn-outline-secondary fw-bold mb-2 py-3 px-5 submit-btn"
              >
                Send Messages
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
