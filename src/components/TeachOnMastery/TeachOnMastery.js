import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LunchYourCourse from "./Lunch your online Course/LunchYourCourse";
import PlaneYourCurriculum from "./Plane Your Curriculum/PlaneYourCurriculum";
import RecordYourVideo from "./Record Your Video/RecordYourVideo";
import "./TeachOnMastery.css";

const TeachOnMastery = () => {
  return (
    <div className="margin-top text-center">
      <h1>How to Begain ?</h1>

      <Router>
        <div>
          <nav className="">
            <Link to="/Teach-on-mastery/plane-your-curriculum">
              <button className="fw-bold btn btn-danger my-4 button link">
                Plane your Curriculum
              </button>
            </Link>

            <Link to="/Teach-on-mastery/record-your-video">
              <button className="fw-bold btn btn-danger my-4 button link">
                Record your Video
              </button>
            </Link>

            <Link to="/Teach-on-mastery/launch-your-course">
              <button className="fw-bold btn btn-danger my-4 button link">
                Launch your Course
              </button>
            </Link>
          </nav>
          <Switch>
          <Route exact path="/Teach-on-mastery">
                  <PlaneYourCurriculum></PlaneYourCurriculum>
              </Route>
              <Route path="/Teach-on-mastery/plane-your-curriculum">
                  <PlaneYourCurriculum></PlaneYourCurriculum>
              </Route>
              <Route path="/Teach-on-mastery/record-your-video">
                  <RecordYourVideo></RecordYourVideo>
              </Route>
              <Route path="/Teach-on-mastery/launch-your-course">
                  <LunchYourCourse></LunchYourCourse>
              </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default TeachOnMastery;
