import React, { useState } from 'react';
import images from "../../images/images.png";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assessment.css';
import Sidebar from "../Sidebar/Sidebar";
import '../Home/home.css';

export default function AssessmentPage() {
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

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const isFindUniversitiesButton = step === 3;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        className="fullpage"
        style={{
          width: "100%",
        }}
      >
        <div class="d-flex justify-content-between">
          <div class="p-2 navbarTitle" style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "2%" }}>College Finder</div>
          <div class="d-flex">
            <div class="p-2 d-flex">
              <img src={images} alt="" height={55} width={55} style={{ borderRadius: "100px" }} />
              <p style={{ marginTop: "auto", marginBottom: "auto" }} ></p>
            </div>
          </div>
        </div>
        <p class="caption-text" style={{ marginTop: "-15px", marginLeft: "3%" }}>Engage. Streamline. Achieve</p>

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
                  <input type="text" className="form-control" value={name} onChange={(e) => handleInputChange(e, setName)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Where do you want to study?</label>
                  <input type="text" className="form-control" value={studyLocation} onChange={(e) => handleInputChange(e, setStudyLocation)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">What are you planning to study?</label>
                  <input type="text" className="form-control" value={majors} onChange={(e) => handleInputChange(e, setMajors)} />
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <div className="mb-3">
                  <label className="form-label">Which course did you major in?</label>
                  <input type="text" className="form-control" value={majorCourse} onChange={(e) => handleInputChange(e, setMajorCourse)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">What is your CGPA?</label>
                  <input type="text" className="form-control" value={cgpa} onChange={(e) => handleInputChange(e, setCgpa)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Do you have any backlogs?</label>
                  <input type="text" className="form-control" value={backlogs} onChange={(e) => handleInputChange(e, setBacklogs)} />
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <div className="score-container">
                  <div className="mb-3">
                    <label className="form-label">Which English Test did you take?</label>
                    <select className="form-control" value={englishTest} onChange={(e) => handleInputChange(e, setEnglishTest)}>
                      <option value="">Select</option>
                      <option value="toefl">TOEFL</option>
                      <option value="ielts">IELTS</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                  {englishTest === 'toefl' && (
                    <div className="mb-3">
                      <label className="form-label">TOEFL Score:</label>
                      <input type="text" className="form-control" value={toeflScore} onChange={(e) => handleInputChange(e, setToeflScore)} />
                    </div>
                  )}
                  {englishTest === 'ielts' && (
                    <div className="mb-3">
                      <label className="form-label">IELTS Score:</label>
                      <input type="text" className="form-control" value={ieltsScore} onChange={(e) => handleInputChange(e, setIeltsScore)} />
                    </div>
                  )}
                </div>
                <div className="score-container">
                  <div className="mb-3">
                    <label className="form-label">Which Aptitude Test did you take?</label>
                    <select className="form-control" value={aptitudeTest} onChange={(e) => handleInputChange(e, setAptitudeTest)}>
                      <option value="">Select</option>
                      <option value="gre">GRE</option>
                      <option value="gmat">GMAT</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                  {aptitudeTest === 'gre' && (
                    <div className="mb-3">
                      <label className="form-label">GRE Score:</label>
                      <input type="text" className="form-control" value={greScore} onChange={(e) => handleInputChange(e, setGreScore)} />
                    </div>
                  )}
                  {aptitudeTest === 'gmat' && (
                    <div className="mb-3">
                      <label className="form-label">GMAT Score:</label>
                      <input type="text" className="form-control" value={gmatScore} onChange={(e) => handleInputChange(e, setGmatScore)} />
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">SOP Score:</label>
                  <input type="text" className="form-control" value={sopScore} onChange={(e) => handleInputChange(e, setSopScore)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">LOR Score:</label>
                  <input type="text" className="form-control" value={lorScore} onChange={(e) => handleInputChange(e, setLorScore)} />
                </div>
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
      </div>
    </div>
  );
}
