import React from "react";
import Rating from "react-rating";
import "./Course.css";

const Course = (props) => {
  const {
    img,
    course_name,
    instructor,
    rating,
    ratedByPeople,
    price,
    bestseller,
  } = props.courseInformation; //destructuring

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={course_name} />
        <div className="card-body">
          <h6 className="card-title fw-bold mb-0">{course_name}</h6>
          <p className="card-text mb-0">{instructor}</p>
          <div className="d-flex">
            <h5 className="fw-bold me-2 mb-0">{rating}</h5>
            <Rating
              initialRating={rating}
              emptySymbol="far fa-star rating-color"
              fullSymbol="fas fa-star rating-color"
              readonly
            />
            <p className="ms-1 mb-0">({ratedByPeople})</p>
          </div>
          <h3 className="mb-0">${price}</h3>
          <div className="mb-0">
            <span className="best-seller-bg">{bestseller}</span>
          </div>
        </div>
        <button className="mb-0 btn btn-outline-dark">Enroll Now</button>
      </div>
    </div>
  );
};

export default Course;
