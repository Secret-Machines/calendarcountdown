import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "react-background-video-player";
import videos from "./images/photo.mp4";

const mainmenu = {
  width: "2430px",
  height: "790px",
  top: "50%",
  border: "1px solid",
  margin: "-300px 0 0 -500px"
};

export default function Home() {
  return (
    <div className="App">
      <h1>AM's CountdownCalendar App: </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calendar"> Calendar</Link>
        </li>
        <li>
          <Link to="/countdown"> Countdown</Link>
        </li>
        <li>
          <Link to="/resources"> Resources</Link>
        </li>
      </ul>
      <VideoPlayer style={mainmenu} src={videos} autoPlay={true} muted={true} />
    </div>
  );
}
