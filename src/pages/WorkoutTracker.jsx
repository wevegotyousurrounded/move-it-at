import React from "react";
import "../assets/css/tracker.css"; 

const workoutVideoSrc = "bicep.mp4"; 
const nextWorkoutVideoSrc = "next.mp4"; 
const poseTrackingURL = "http://your-tracker-device-ip:5000/"; // Update with actual device URL

const WorkoutTracker = () => {
  return (
    <div className="tracker-container">
      
      {/* 🎥 Workout Video & Pose Tracking */}
      <div className="tracker-workout">
        <div className="video-container">
          <h3>Current Workout</h3>
          <video controls autoPlay loop className="workout-video">
            <source src={workoutVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="pose-tracker">
          <h3>Live Pose Tracking</h3>
          <iframe
            src={poseTrackingURL}
            title="Pose Tracking"
            className="pose-tracking-frame"
          ></iframe>
        </div>
      </div>

      {/* 📊 Workout Details */}
      <div className="tracker-info">
        <p><strong>REPS:</strong> 5</p>
        <p><strong>TIME:</strong> 10 MINS</p>
        <p><strong>WORKOUT:</strong> Goblet Squat</p>
        <p className="encouragement">YOU ARE DOING GREAT! KEEP IT UP</p>
      </div>

      {/* 🔜 Next Workout - Now a Video */}
      <div className="tracker-up-next">
        <h3>UP NEXT</h3>
        <video controls autoPlay loop className="next-workout-video">
          <source src={nextWorkoutVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default WorkoutTracker;
