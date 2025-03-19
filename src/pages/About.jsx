import React from "react";
import "../assets/css/about.css"; // Importing the separate CSS file
import aboutImage from "/images/workout-1.png"; // Hero Image

const About = () => {
  return (
    <div className="about-page">
      {/* 🔹 Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About MOVE IT</h1>
          <p>Revolutionizing workouts with AI-powered posture tracking and performance analysis.</p>
        </div>
      </section>

      {/* 🔹 About Content Section */}
      <section className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            At MOVE IT, we aim to bridge the gap between fitness and technology. Our AI-driven 
            platform analyzes your workout posture in real-time, offering personalized insights 
            to enhance your performance and prevent injuries.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="AI-powered workout tracking" />
        </div>
      </section>

      {/* 🔹 Features Section */}
      <section className="about-features">
        <div className="feature-box">
          <h3>📊 Real-time Feedback</h3>
          <p>Track your movements and get instant AI-powered corrections.</p>
        </div>
        <div className="feature-box">
          <h3>🔍 Posture Analysis</h3>
          <p>Reduce injury risks with form correction insights.</p>
        </div>
        <div className="feature-box">
          <h3>📈 Progress Tracking</h3>
          <p>Measure improvements with data-driven analytics.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
