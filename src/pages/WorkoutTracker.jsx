

import React, { useEffect, useRef } from "react";
import "../assets/css/tracker.css";
import PoseEstimation from "./PoseEstimation"; // Import PoseEstimation component

const workoutVideoSrc = "/videos/bicep.mp4";
const nextWorkoutVideoSrc = "/videos/next.mp4";

const WorkoutTracker = () => {
  const workoutVideoRef = useRef(null);
  const nextWorkoutVideoRef = useRef(null);

  useEffect(() => {
    // Ensure autoplay works after rendering
    if (workoutVideoRef.current) {
      workoutVideoRef.current.muted = true;
      workoutVideoRef.current.play().catch((error) => {
        console.warn("Workout video autoplay blocked:", error);
      });
    }

    if (nextWorkoutVideoRef.current) {
      nextWorkoutVideoRef.current.muted = true;
      nextWorkoutVideoRef.current.play().catch((error) => {
        console.warn("Next workout video autoplay blocked:", error);
      });
    }
  }, []);

  return (
    <div className="tracker-container">
      <div className="tracker-top">
      <div className="video-container">
  <video
    ref={workoutVideoRef}
    controls
    autoPlay
    loop
    muted
    onError={() => console.error("Failed to load bicep.mp4")}
  >
    <source src={workoutVideoSrc} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

      <div className="pose-tracker">
          <PoseEstimation />
      </div>

      </div>

      <div className="tracker-bottom">
        <div className="tracker-info">
          <h3>Workout Stats</h3>
          <p>
            <strong>TIME:</strong> 10 MINS
          </p>
          <p>
            <strong>WORKOUT:</strong> Bicep Curl
          </p>
          <p className="encouragement">YOU ARE DOING GREAT! KEEP IT UP</p>
        </div>

        <div className="next-workout">
          <h3>Up Next</h3>
          <video
            ref={nextWorkoutVideoRef}
            controls
            autoPlay
            loop
            muted
            className="next-workout-video"
            onError={() => console.error("Failed to load next.mp4")}
          >
            <source src={nextWorkoutVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTracker;
