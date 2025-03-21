import React from "react";
import "../assets/css/tracker.css"; 

const workoutVideoSrc = "/videos/bicep.mp4"; 
const nextWorkoutVideoSrc = "/videos/next.mp4"; 

const WorkoutTracker = () => {
  return (
    <div className="tracker-container">
      <div className="tracker-top">
        <div className="video-container">
          <h3>Current Workout: Bicep Curl</h3>
          <video controls autoPlay loop muted className="workout-video">
            <source src={workoutVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="pose-tracker">
          <h3>Live Pose Tracking</h3>
          <iframe
            src="http://your-tracker-device-ip:5000/"
            title="Pose Tracking"
            className="pose-tracking-frame"
            allow="camera; fullscreen"
          ></iframe>
        </div>
      </div>

      <div className="tracker-bottom">
        <div className="tracker-info">
          <h3>Workout Stats</h3>
          <p><strong>TIME:</strong> 10 MINS</p>
          <p><strong>WORKOUT:</strong> Bicep Curl</p>
          <p className="encouragement">YOU ARE DOING GREAT! KEEP IT UP</p>
        </div>

        <div className="next-workout">
          <h3>Up Next</h3>
          <video controls autoPlay loop muted className="next-workout-video">
            <source src={nextWorkoutVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTracker;
