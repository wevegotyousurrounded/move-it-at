import React from "react";
import "../assets/css/tracker.css"; // Import CSS file

// Video sources (Update with actual video URLs)
const workoutVideoSrc = "/videos/bicep.mp4"; 
const nextWorkoutVideoSrc = "/videos/next.mp4"; 
//const poseTrackingURL = "http://your-tracker-device-ip:5000/"; // Replace with your PoseNet tracker URL

const WorkoutTracker = () => {
  return (
    <div className="tracker-container">
      
      {/* 🎥 Workout Video & Pose Tracking */}
      <div className="tracker-workout">
        {/* Current Workout Video */}
        <div className="video-container">
          <h3>Current Workout</h3>
          <video controls autoPlay loop muted className="workout-video">
            <source src={workoutVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Live Pose Tracking */}
        <div className="pose-tracker">
          <h3>Live Pose Tracking</h3>
          <iframe
            src={poseTrackingURL}
            title="Pose Tracking"
            className="pose-tracking-frame"
            allow="camera; fullscreen"
          ></iframe>
        </div>
      </div>

      {/* 📊 Workout Details & Next Workout Section */}
      <div className="tracker-info-container">
        {/* Workout Details */}
        <div className="tracker-info">
          
          <p><strong>TIME:</strong> 10 MINS</p>
          <p><strong>WORKOUT:</strong> Bicep Curl</p>
          <p className="encouragement">YOU ARE DOING GREAT! KEEP IT UP</p>
        </div>

        {/* Next Workout Video */}
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
