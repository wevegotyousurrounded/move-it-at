import React from "react";
import "./goalsProgress.css";
import "../assets/css/goals.css";


const GoalsProgress = () => {
  return (
    <div className="goals-progress-page">
      {/* Top Nav / Header (Optional) */}
      <header className="gp-header">
        <h2>Hello Adam!</h2>
        <button className="gp-menu-btn">
          {/* Could be a hamburger icon or user avatar */}
          <span className="gp-menu-icon">☰</span>
        </button>
      </header>

      {/* Goals Overview */}
      <section className="gp-goals-section">
        <h3>Your Goals for today</h3>
        <p className="gp-workout-title">Complete beginners AB Workout</p>
        <p className="gp-time-range">4pm - 6pm</p>
      </section>

      {/* Days Row */}
      <section className="gp-days-row">
        {/* Example 10 days */}
        <div className="gp-day-box">1<br />Mon</div>
        <div className="gp-day-box">2<br />Tue</div>
        <div className="gp-day-box">3<br />Wed</div>
        <div className="gp-day-box">4<br />Thu</div>
        <div className="gp-day-box">5<br />Fri</div>
        <div className="gp-day-box">6<br />Sat</div>
        <div className="gp-day-box">7<br />Sun</div>
        <div className="gp-day-box">8<br />Mon</div>
        <div className="gp-day-box">9<br />Tue</div>
        <div className="gp-day-box">10<br />Wed</div>
      </section>

      {/* Progress Chart (Placeholder) */}
      <section className="gp-chart-section">
        <svg className="gp-chart" viewBox="0 0 300 100">
          {/* X-axis labels (roughly) */}
          <text x="30" y="95" fill="#333" fontSize="10">2pm</text>
          <text x="80" y="95" fill="#333" fontSize="10">3pm</text>
          <text x="130" y="95" fill="#333" fontSize="10">4pm</text>
          <text x="180" y="95" fill="#333" fontSize="10">5pm</text>
          <text x="230" y="95" fill="#333" fontSize="10">6pm</text>

          {/* Example line path (dummy data) */}
          <path
            d="M 30 70 C 50 30, 90 30, 110 70 
               S 160 90, 180 50 
               S 220 40, 250 70"
            stroke="#b81d41"
            strokeWidth="3"
            fill="none"
          />
          {/* Area under the curve (optional) */}
          <path
            d="M 30 70 C 50 30, 90 30, 110 70 
               S 160 90, 180 50 
               S 220 40, 250 70 
               L 250 100 L 30 100 Z"
            fill="#b81d4166"
          />
        </svg>
      </section>

      {/* Completion / Score */}
      <section className="gp-completion-section">
        <h3>Hello Adam, JOB WELL DONE!</h3>
        <p>You completed your workout</p>
        <p>You Finished Beginner AB Workout</p>
        <div className="gp-score-box">
          <p className="gp-score-label">Your Score</p>
          <p className="gp-score-value">62 / 100</p>
        </div>
      </section>
    </div>
  );
};

export default GoalsProgress;
