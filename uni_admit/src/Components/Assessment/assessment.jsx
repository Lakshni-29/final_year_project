import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assessment.css';
import Navbar from "../Navbar/Navbar";
import '../Home/home.css';
import KYUImg from "../../images/KYUImg.png";

const AssessmentPage = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [studyLocation, setStudyLocation] = useState('');
  const [majors, setMajors] = useState('');
  const [majorCourse, setMajorCourse] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [backlogs, setBacklogs] = useState('');
  const [englishTest, setEnglishTest] = useState('');
  const [toeflScore, setToeflScore] = useState('');
  const [ieltsScore, setIeltsScore] = useState('');
  const [aptitudeTest, setAptitudeTest] = useState('');
  const [greScore, setGreScore] = useState('');
  const [gmatScore, setGmatScore] = useState('');
  const [sopScore, setSopScore] = useState('');
  const [lorScore, setLorScore] = useState('');

  // Array to store titles for each step
  const stepTitles = [
    'TAKE US THROUGH YOUR DREAM EDUCATION',
    'TELL US ALL ABOUT YOUR UNDERGRAD',
    'FILL UP YOUR TEST SCORES',
  ];

  const handleNextStep = () => {
    setStep(step + 1);
  };


  const handlePrevStep = () => {
    setStep(step - 1);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStudyLocationChange = (e) => {
    setStudyLocation(e.target.value);
  };

  const handleMajorsChange = (e) => {
    setMajors(e.target.value);
  };

  const handleMajorCourseChange = (e) => {
    setMajorCourse(e.target.value);
  };

  const handleCgpaChange = (e) => {
    setCgpa(e.target.value);
  };

  const handleBacklogsChange = (e) => {
    setBacklogs(e.target.value);
  };

  const handleEnglishTestChange = (e) => {
    setEnglishTest(e.target.value);
  };

  const handleToeflScoreChange = (e) => {
    setToeflScore(e.target.value);
  };

  const handleIeltsScoreChange = (e) => {
    setIeltsScore(e.target.value);
  };

  const handleAptitudeTestChange = (e) => {
    setAptitudeTest(e.target.value);
  };

  const handleGreScoreChange = (e) => {
    setGreScore(e.target.value);
  };

  const handleGmatScoreChange = (e) => {
    setGmatScore(e.target.value);
  };

  const handleSopScoreChange = (e) => {
    setSopScore(e.target.value);
  };

  const handleLorScoreChange = (e) => {
    setLorScore(e.target.value);
  };
  const isFindUniversitiesButton = step === 3;

  return (
    <div>
      <Navbar />
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="assessment-box p-4 border border-primary">
          {/* Dynamically display page title based on step */}
          <h2 className="mb-4">{stepTitles[step - 1]}</h2>
          <div className="step-indicator mb-3 text-end">
            {[1, 2, 3].map((index) => (
              <span key={index} className={`step-dot ${index === step ? 'active' : ''}`}></span>
            ))}

          </div>
          <hr className="mb-3" /> {/* Horizontal line below the step indicator dots */}
          {step === 1 && (
            <>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={handleNameChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Where do you want to study?</label>
                <input type="text" className="form-control" value={studyLocation} onChange={handleStudyLocationChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">What are you planning to study?</label>
                <input type="text" className="form-control" value={majors} onChange={handleMajorsChange} />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="mb-3">
                <label className="form-label">Which course did you major in?</label>
                <input type="text" className="form-control" value={majorCourse} onChange={handleMajorCourseChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">What is your CGPA?</label>
                <input type="text" className="form-control" value={cgpa} onChange={handleCgpaChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Do you have any backlogs?</label>
                <input type="text" className="form-control" value={backlogs} onChange={handleBacklogsChange} />
              </div>
              {/* Add more input fields for Step 2 */}
            </>
          )}
          {step === 3 && (
            <>
              <div className="score-container">
                <div className="mb-3">
                  <label className="form-label">Which English Test did you take?</label>
                  <select className="form-control" value={englishTest} onChange={handleEnglishTestChange}>
                    <option value="">Select</option>
                    <option value="toefl">TOEFL</option>
                    <option value="ielts">IELTS</option>
                    <option value="none">None</option>
                  </select>
                </div>
                {englishTest === 'toefl' && (
                  <div className="mb-3">
                    <label className="form-label">TOEFL Score:</label>
                    <input type="text" className="form-control" value={toeflScore} onChange={handleToeflScoreChange} />
                  </div>
                )}
                {englishTest === 'ielts' && (
                  <div className="mb-3">
                    <label className="form-label">IELTS Score:</label>
                    <input type="text" className="form-control" value={ieltsScore} onChange={handleIeltsScoreChange} />
                  </div>
                )}
              </div>
              <div className="score-container">
                <div className="mb-3">
                  <label className="form-label">Which Aptitude Test did you take?</label>
                  <select className="form-control" value={aptitudeTest} onChange={handleAptitudeTestChange}>
                    <option value="">Select</option>
                    <option value="gre">GRE</option>
                    <option value="gmat">GMAT</option>
                    <option value="none">None</option>
                  </select>
                </div>
                {aptitudeTest === 'gre' && (
                  <div className="mb-3">
                    <label className="form-label">GRE Score:</label>
                    <input type="text" className="form-control" value={greScore} onChange={handleGreScoreChange} />
                  </div>
                )}
                {aptitudeTest === 'gmat' && (
                  <div className="mb-3">
                    <label className="form-label">GMAT Score:</label>
                    <input type="text" className="form-control" value={gmatScore} onChange={handleGmatScoreChange} />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">SOP Score:</label>
                <input type="text" className="form-control" value={sopScore} onChange={handleSopScoreChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">LOR Score:</label>
                <input type="text" className="form-control" value={lorScore} onChange={handleLorScoreChange} />
              </div>
              {/* Add more input fields for Step 3 */}
            </>
          )}
          <div className="d-flex justify-content-between subbtn">
            <button className="btn btn-secondary" onClick={handlePrevStep} disabled={step === 1}>
              Back
            </button>
            {isFindUniversitiesButton ? (
              <Link to="/recommend">
                <button className="btn btn-primary btn1" >
                  Find Universities
                </button>
              </Link>
            ) : (
              <button className="btn btn-primary btn1" onClick={handleNextStep}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img src={KYUImg} style={{ width: "100%", marginTop: "17%" }} alt="" />
            </div>

            <div className="col-2">
              <ul style={{ listStyle: "none", marginTop: "70px" }}>
                <li className="footer-text">WEEBLY THEMES</li>
                <li className="footer-text">PRE-Sale FAQS</li>
                <li className="footer-text">SUBMIT A TICKET</li>
              </ul>
            </div>

            <div className="col-2">
              <ul style={{ listStyle: "none", marginTop: "70px" }}>
                <li className="footer-text">SERVICES</li>
                <li className="footer-text">THEME TWEAK</li>
              </ul>
            </div>

            <div className="col-2">
              <ul style={{ listStyle: "none", marginTop: "70px" }}>
                <li className="footer-text">SHOWCASE</li>
                <li className="footer-text">WIDGETKIT</li>
                <li className="footer-text">SUPPORT</li>
              </ul>
            </div>

            <div className="col-2">
              <ul style={{ listStyle: "none", marginTop: "70px" }}>
                <li className="footer-text">ABOUT US</li>
                <li className="footer-text">CONTACT US</li>
                <li className="footer-text">AFFILIATES</li>
                <li className="footer-text">RESOURCES</li>
              </ul>
            </div>
          </div>

          <div class="line"></div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;
