import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import images from "../../images/images.png";
import "./admission.css";

// Import university images
import dartmouth from "../../images/Dartmouth.png";
import vtour2 from "../../images/vtour2.png";
import vtour9 from "../../images/vtour9.png";
import search from "../../images/search.png";

export default function Admission() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [showProgramBoxes, setShowProgramBoxes] = useState(false);

  const universities = [
    {
      name: "UNIVERSITY OF CHICAGO",
      icon: dartmouth,
      programs: [
        { id: 1, programName: "MS Financial Mathematics", term: "Fall (Round 2)", deadline: "March 21, 2024", detailsLink: "https://finmath.uchicago.edu/admissions/admission-requirements/" },
        { id: 1, programName: "Masters Supply Chain Management", term: "Fall (Round 3)", deadline: "March 30, 2024", detailsLink: "https://finmath.uchicago.edu/admissions/admission-requirements/" },
      ]
    },
    {
      name: "Arizona State University",
      icon: vtour9,
      programs: [
        { id: 2, programName: "Masters Global Management", term: "Fall (Final Deadline)", deadline: "March 30, 2024", detailsLink: "https://thunderbird.asu.edu/degree/graduate/master-global-management" },
        { id: 3, programName: "Masters Global Management (Public)", term: "Fall (Final Deadline)", deadline: "March 30, 2024", detailsLink: "https://thunderbird.asu.edu/degree/graduate/master-global-management" }
      ]
    },
    {
      name: "New York University",
      icon: vtour2,
      programs: [
        { id: 1, programName: "MS Environmental Health Sciences", term: "Fall (Standard Deadline)", deadline: "March 31, 2024", detailsLink: "https://med.nyu.edu/departments-institutes/medicine/divisions/environmental-medicine/education#how-to-apply" },
        { id: 2, programName: "MS Business Analytics", term: "Fall (Round 4)", deadline: "March 20, 2024", detailsLink: "https://med.nyu.edu/departments-institutes/medicine/divisions/environmental-medicine/education#how-to-apply" }
      ]
    },
    // Add more universities with their programs
  ];

  const handleSearch = () => {
    const filtered = universities.filter((university) =>
      university.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUniversities(filtered);
    setShowProgramBoxes(true);
  };

  const displayUniversities = filteredUniversities.length > 0 ? filteredUniversities : universities;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        className="fullpage"
        style={{
          width: "100%",
        }}
      >
        {/* Page top info */}
        <div class="d-flex justify-content-between">
          <div class="p-2 navbarTitle" style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "2%" }}>Admission Timeline</div>
          <div class="d-flex">
            <div class="p-2 d-flex">
              <img src={images} alt="" height={55} width={55} style={{ borderRadius: "100px" }} />
              <p style={{ marginTop: "auto", marginBottom: "auto" }} ></p>
            </div>
          </div>
        </div>
        <p class="caption-text" style={{ marginTop: "-15px", marginLeft: "3%" }}>Your Roadmap to Success!</p>

        <div className="custom-search-container">
          <input
            type="text"
            placeholder="Search for universities"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="custom-search-input"
          />
          <button className="custom-search-button" onClick={handleSearch}>
            <img src={search} alt="Search Icon" width={25} height={25} />
          </button>
        </div>

        <div className="program-boxes">
          {displayUniversities.map((university, index) => (
            <div key={index} className="university-container" style={{ width: "calc(100% / 3)" }}>
              {university.programs.map((program) => (
                <div key={program.id} className="program-box">
                  <img src={university.icon} alt="University Icon" height={30} width={30} />
                  <h4>{university.name}</h4>
                  <p><strong>Program:</strong> {program.programName}</p>
                  <p><strong>Term:</strong> {program.term}</p>
                  <p><strong>Deadline:</strong> {program.deadline}</p>
                  <a href={program.detailsLink} className="view-details-button">View Details</a>

                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
