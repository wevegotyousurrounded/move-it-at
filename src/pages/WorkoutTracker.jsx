import React from "react";
import "../assets/css/tracker.css"; // Import CSS file

// Updated video sources
const workoutVideoSrc = "https://your-server.com/bicep.mp4"; 
const nextWorkoutVideoSrc = "https://your-server.com/next.mp4"; 
const poseTrackingURL = "http://your-tracker-device-ip:5000/"; // Replace with actual PoseNet URL

const WorkoutTracker = () => {
  return (
    <div className="tracker-container">
      
      {/* 🎥 Workout & Tracking Section */}
      <div className="tracker-top">
        
        {/* Current Workout Video */}
        <div className="video-container">
          <h3>Current Workout: Bicep Curl</h3>
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
      <div className="tracker-bottom">
        
        {/* Workout Details */}
        <div className="tracker-info">
          <h3>Workout Stats</h3>
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
