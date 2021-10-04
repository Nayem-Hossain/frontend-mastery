import React from "react";
import "./LunchYourCourse.css";
import lunch from "../../../launch-your-online-course.png";

const LunchYourCourse = () => {
  return (
    <section className="container border border-5">
      <div className="row h-100">
        <div className="col p-5">
          <p>
            Gather your first ratings and reviews by promoting your course
            through social media and your professional networks. Your course
            will be discoverable in our marketplace where you earn revenue from
            each paid enrollment.
          </p>
          <h5>How we help you !</h5>
          <p>
            Our custom coupon tool lets you offer enrollment incentives while
            our global promotions drive traffic to courses. There’s even more
            opportunity for courses chosen for Udemy Business.
          </p>
        </div>
        <div className="col p-0">
          <img className="img-fluid" src={lunch} alt="curriculum pic" />
        </div>
      </div>
    </section>
  );
};

export default LunchYourCourse;
