import React from "react";
import './PlaneYourCurriculum.css'
import curriculum from "../../../curriculum-design.jpg";

const PlaneYourCurriculum = () => {
  return (
    <section className='container border border-5 h-50'>
        <div className="row">
      <div className="col p-5">
        <p>
          You start with your passion and knowledge. Then choose a promising
          topic with the help of our Marketplace Insights tool. The way that you
          teach — what you bring to it — is up to you.
        </p>
        <h5>How we help you !</h5>
        <p>
          We offer plenty of resources on how to create your first course. And,
          our instructor dashboard and curriculum pages help keep you organized.
        </p>
      </div>
      <div className="col p-0">
        <img className="img-fluid" src={curriculum} alt="curriculum pic"/>
      </div>
    </div>
    </section>
  );
};

export default PlaneYourCurriculum;
