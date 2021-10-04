import React from "react";
import "./RecordYourVideo.css";
import record from "../../../recording video.png";

const RecordYourVideo = () => {
  return (
    <section className="container border border-5">
      <div className="row h-100">
        <div className="col p-5">
          <p>
            Use basic tools like a smartphone or a DSLR camera. Add a good
            microphone and you’re ready to start. If you don’t like being on
            camera, just capture your screen. Either way, we recommend two hours
            or more of video for a paid course.
          </p>
          <h5>How we help you !</h5>
          <p>
            Our support team is available to help you throughout the process and
            provide feedback on test videos.
          </p>
        </div>
        <div className="col p-0">
          <img className="img-fluid" src={record} alt="curriculum pic" />
        </div>
      </div>
    </section>
  );
};

export default RecordYourVideo;
