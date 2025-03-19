import React, { useRef } from "react";
import "../assets/css/styles.css";
import { useNavigate } from "react-router-dom"; // 🔹 Import useNavigate
import squatsImage from "/images/squats.jpg";
import legPressImage from "/images/plank.jpg";

const Home = () => {
  const navigate = useNavigate(); // 🔹 Create navigate function
  const myWorkoutsRef = useRef(null);

  const scrollLeft = () => {
    if (myWorkoutsRef.current) {
      myWorkoutsRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (myWorkoutsRef.current) {
      myWorkoutsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>MOVE IT</h1>
          <p>Your AI-powered fitness tracker for better posture and progress.</p>
          <button className="cta-button1" onClick={() => navigate("/plans")}>
            Start Workout
            </button>
        </div>
      </section>

      {/* My Workouts Section */}
      <section className="my-workouts-home">
        <h2 className="my-workouts-title">My Workouts</h2>
        <div className="my-workouts-container">
          <div className="workout-carousel">
            <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
            <div className="workout-scroll" ref={myWorkoutsRef}>
              <div className="workout-card highlight" onClick={() => navigate("/workout-tracker")}>
                <img src={squatsImage} alt="Squats" />
                <div className="workout-title">Squats</div>
                <button className="resume-btn">▶</button>
              </div>
              <div className="workout-card">
                <img src={legPressImage} alt="Planks" />
                <div className="workout-title">Plank</div>
                <button className="resume-btn">▶</button>
              </div>
            </div>
            <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
          </div>
        </div>
      </section>

      {/* Final Section - Text Left, Image Right */}
      <section className="final-section">
        <div className="final-container">
          <div className="final-image">
          <img src="/images/gym-scene.png" alt="AI fitness demonstration" />

          </div>
          <div className="final-text-box">
            <h2>Introducing MOVE IT</h2>
            <h3>The Ultimate Method to Improve Your Form</h3>
            <p>
              AI-powered workout feedback to ensure perfect form and prevent injuries. Train smarter and achieve better results with real-time corrections.
            </p>
            {/* 🔹 Add the navigation to the About page */}
            <button className="cta-button1" onClick={() => navigate("/about")}>
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
