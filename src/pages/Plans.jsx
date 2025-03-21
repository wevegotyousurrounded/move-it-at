import React, { useRef } from "react";
import "../assets/css/workoutPlans.css";
import { useNavigate } from "react-router-dom";
import hitImage from "/images/hit.jpg";
import strengthImage from "/images/strength.jpg";
import dumbbellImage from "/images/dumbbell.jpg";
import absImage from "/images/abs.jpg";
import armImage from "/images/arm.jpg";
import cardioImage from "/images/cardio.jpg";
import squatsImage from "/images/row.jpg";
import legPressImage from "/images/plank.jpg";
import yogaImage from "/images/yoga.jpg";
import aerobicsImage from "/images/aerobics.jpg";
import meditationImage from "/images/meditation.jpg";

const Plans = () => {
    const navigate = useNavigate();
    const scrollRefs = {
        intense: useRef(null),
        flexibility: useRef(null),
        newWorkouts: useRef(null),
        myWorkouts: useRef(null)
    };

    const scrollLeft = (ref) => {
        if (scrollRefs[ref].current) {
            scrollRefs[ref].current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = (ref) => {
        if (scrollRefs[ref].current) {
            scrollRefs[ref].current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="workout-plans-container">
            {/* My Workouts Section - Boxed with Title on Left */}
            <div className="my-workouts-container">
                <div className="my-workouts-title">
                    <h2>My Workouts</h2>
                </div>
                <div className="workout-carousel">
                    <button className="scroll-btn left" onClick={() => scrollLeft("myWorkouts")}>&lt;</button>
                    <div className="workout-scroll" ref={scrollRefs.myWorkouts}>
                        <div className="workout-card highlight" onClick={() => navigate("/WorkoutTracker")}> 
                            <img src={squatsImage} alt="Squats" />
                            <div className="workout-title">Upper-body</div>
                            <button className="resume-btn">▶</button> {/* Play icon */}
                        </div>
                        <div className="workout-card"> 
                            <img src={legPressImage} alt="Planks" />
                            <div className="workout-title">Plank</div>
                            <button className="resume-btn">▶</button> {/* Play icon */}
                        </div>
                    </div>
                    <button className="scroll-btn right" onClick={() => scrollRight("myWorkouts")}>&gt;</button>
                </div>
            </div>

            {/* Intense Workouts Section */}
            <div className="workout-category">
                <h2>Intense Workout</h2>
                <div className="workout-carousel">
                    <button className="scroll-btn left" onClick={() => scrollLeft("intense")}>&lt;</button>
                    <div className="workout-scroll" ref={scrollRefs.intense}>
                        <div className="workout-card">
                            <img src={hitImage} alt="10 mins HIIT" />
                            <div className="workout-title">10 mins HIT</div>
                        </div>
                        <div className="workout-card">
                            <img src={strengthImage} alt="15 mins Strength Workout" />
                            <div className="workout-title">15 mins Strength Workout</div>
                        </div>
                        <div className="workout-card">
                            <img src={dumbbellImage} alt="10 Dumbbell Workout" />
                            <div className="workout-title">10 Dumbbell Workout</div>
                        </div>
                    </div>
                    <button className="scroll-btn right" onClick={() => scrollRight("intense")}>&gt;</button>
                </div>
            </div>

            {/* Flexibility & Recovery Section */}
            <div className="workout-category">
                <h2>Flexibility & Recovery</h2>
                <div className="workout-carousel">
                    <button className="scroll-btn left" onClick={() => scrollLeft("flexibility")}>&lt;</button>
                    <div className="workout-scroll" ref={scrollRefs.flexibility}>
                        <div className="workout-card">
                            <img src={yogaImage} alt="Yoga" />
                            <div className="workout-title">Yoga</div>
                        </div>
                        <div className="workout-card">
                            <img src={aerobicsImage} alt="Aerobics" />
                            <div className="workout-title">Aerobics</div>
                        </div>
                        <div className="workout-card">
                            <img src={meditationImage} alt="Meditation" />
                            <div className="workout-title">Meditation</div>
                        </div>
                    </div>
                    <button className="scroll-btn right" onClick={() => scrollRight("flexibility")}>&gt;</button>
                </div>
            </div>

            {/* New Workouts Section */}
            <div className="workout-category">
                <h2>New Workouts</h2>
                <div className="workout-carousel">
                    <button className="scroll-btn left" onClick={() => scrollLeft("newWorkouts")}>&lt;</button>
                    <div className="workout-scroll" ref={scrollRefs.newWorkouts}>
                        <div className="workout-card">
                            <img src={absImage} alt="Abs Workout" />
                            <div className="workout-title">Abs Workout</div>
                        </div>
                        <div className="workout-card">
                            <img src={armImage} alt="Arm Workout" />
                            <div className="workout-title">Arm Workout</div>
                        </div>
                        <div className="workout-card">
                            <img src={cardioImage} alt="Cardio" />
                            <div className="workout-title">Cardio</div>
                        </div>
                    </div>
                    <button className="scroll-btn right" onClick={() => scrollRight("newWorkouts")}>&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default Plans;
