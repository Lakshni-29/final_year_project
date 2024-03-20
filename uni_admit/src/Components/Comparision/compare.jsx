import React, { useState } from 'react';
import Sidebar from "../Sidebar/Sidebar";
import images from "../../images/images.png";
import uni from "../../images/uni.png";
import './compare.css'; // Import CSS file for styles

const ComparisonTool = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [criteria, setCriteria] = useState({
    'World ranking': false,
    Location: false,
    'Tuition fees': false,
    'Student-Faculty Ratio ': false,
    'Acceptance Rate': false,
    'School type': false,
    'Cost of living': false,
    'Popular programs': false,
  });

  const universities = [
    {
      id: 1, 'World ranking': "#1 in Q.S World Ranking", name: "MASSACHUSETTS INSTITUTE OF TECHNOLOGY (MIT)", Location: "Cambridge United States", 'School type': 'Private',
      'Tuition fees': "$60,156", 'Acceptance Rate': "4%", 'Student-Faculty Ratio ': '3:1', 'Cost of living': '$2,845 per month',
      'Popular programs': 'Computer Science, Mechanical Engineering, Mathematics, General'
    },
    {
      id: 2, 'World ranking': "#4 in Q.S World Ranking", name: "HARVARD UNIVERSITY", Location: "Cambridge United States", 'School type': 'Private',
      'Tuition fees': "$59,076", 'Acceptance Rate': "3.2%", 'Student-Faculty Ratio ': '7:1', 'Cost of living': '$2,845 per month',
      'Popular programs': 'Social Sciences, General, Biology/Biological Sciences, General, Mathematics, General'
    },
    {
      id: 3, 'World ranking': "#5 in Q.S World Ranking", name: " STANFORD UNIVERSITY", Location: " Stanford, United States", 'School type': 'Private',
      'Tuition fees': "$62,484", 'Acceptance Rate': "4%", 'Student-Faculty Ratio ': '6:1', 'Cost of living': '$4,650 per month',
      'Popular programs': 'Social Sciences, Computer and Information Sciences and Support Services, Engineering'
    },
    {
      id: 4, 'World ranking': "#10 in Q.S World Ranking", name: "UNIVERSITY OF CALIFORNIA", Location: " Berkeley, United States", 'School type': 'Public',
      'Tuition fees': "$48,465(out-of-state)\n$15,891(in-state)", 'Acceptance Rate': "11%", 'Student-Faculty Ratio ': '19:1', 'Cost of living': '$3,900 to $8,200 per month',
      'Popular programs': 'Social Sciences, Computer and Information Sciences and Support Services, Engineering'
    },
    {
      id: 5, 'World ranking': "#38 in Q.S World Ranking", name: " NEW YORK UNIVERSITY", Location: " New York,United States", 'School type': 'Private',
      'Tuition fees': "$60,438", 'Acceptance Rate': "12.5%", 'Student-Faculty Ratio ': '8:1', 'Cost of living': '$3,000 to $6,000 per month',
      'Popular programs': 'Visual and Performing Arts, Social Sciences, Business, Management, Marketing, and Related Support Services'
    },
    {
      id: 6, 'World ranking': "#33 in Q.S World Ranking", name: " UNIVERSITY OF MICHIGAN-ANN ARBOR", Location: " Ann Arbor United States", 'School type': 'Public',
      'Tuition fees': "$57,273(out-of-state)\n $17,786(in-state)", 'Acceptance Rate': "18%", 'Student-Faculty Ratio ': '15:1', 'Cost of living': '$1,800 to $4,000 per month',
      'Popular programs': 'Computer and Information Sciences, General, Business Administration and Management, General, Economics, General'
    },
    {
      id: 7, 'World ranking': "#57 in Q.S World Ranking", name: "DUKE UNIVERSITY", Location: " Durham United States", 'School type': 'Private',
      'Tuition fees': "$66,172", 'Acceptance Rate': "6%", 'Student-Faculty Ratio ': '5:1', 'Cost of living': '$1,800 to $4,000 per month',
      'Popular programs': 'Computer Science, Econometrics and Quantitative Economics, Public Policy Analysis, General'
    },
    {
      id: 8, 'World ranking': "#63 in Q.S World Ranking", name: " UNIVERSITY OF WASHINGTON", Location: "Seattle United States", 'School type': 'Public',
      'Tuition fees': "$41,997(out-of-state) \n $12,643(in-state)", 'Acceptance Rate': "48%", 'Student-Faculty Ratio ': '21:1', 'Cost of living': ' $1,350 to $3,000 per month',
      'Popular programs': 'Social Sciences, Biological and Biomedical Sciences, Computer and Information Sciences and Support Services'
    },
    {
      id: 9, 'World ranking': "#179 in Q.S World Ranking", name: " ARIZONA STATE UNIVERSITY", Location: "Tempe United States", 'School type': 'Public',
      'Tuition fees': "$32,193(out-of-state)\n $12,051(in-state)", 'Acceptance Rate': "90%", 'Student-Faculty Ratio ': '19:1', 'Cost of living': ' $1,450 to $3,050 per month',
      'Popular programs': 'Business, Management, Marketing, and Related Support Services, Engineering, Biological and Biomedical Sciences'
    },
    {
      id: 10, 'World ranking': "#=234 in Q.S World Ranking", name: " DARTMOUTH COLLEGE", Location: "Hanover United States", 'School type': 'Private',
      'Tuition fees': "$65,511", 'Acceptance Rate': "6%", 'Student-Faculty Ratio ': '7:1', 'Cost of living': ' $1,550 to $3,350  per month',
      'Popular programs': 'Social Sciences, Computer and Information Sciences and Support Services, Engineering'
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleUniversitySelect = (university) => {
    setSelectedUniversities([...selectedUniversities, university]);
  };

  const handleToggleCriteria = (criterion) => {
    setCriteria({ ...criteria, [criterion]: !criteria[criterion] });
  };

  const handleAddToCompare = (university) => {
    handleUniversitySelect(university);
    setSearchQuery(''); // Clear search query after adding
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="fullpage" style={{ width: "100%" }}>
        {/* Page top info */}
        <div className="d-flex justify-content-between">
          <div className="p-2 navbarTitle" style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "2%" }}>Comparison Tool</div>
          <div className="d-flex">
            <div className="p-2 d-flex">
              <img src={images} alt="" height={55} width={55} style={{ borderRadius: "100px" }} />
              <p style={{ marginTop: "auto", marginBottom: "auto" }} ></p>
            </div>
          </div>
        </div>
        <p className="caption-text" style={{ marginTop: "-15px", marginLeft: "3%" }}>Your Path to Clarity!</p>

        {/* Search bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for universities"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button
            onClick={() => {
              const foundUniversity = universities.find(u =>
                u.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
              );
              if (foundUniversity) {
                handleAddToCompare(foundUniversity);
              }
            }}
            className="compare-button"
          >
            Add to Compare
          </button>

        </div>
        <div className="comparison-criteria">
          <h2>Criteria:</h2>
          <ul>
            {Object.keys(criteria).map(criterion => (
              <li key={criterion}>
                <label>
                  <input
                    type="checkbox"
                    checked={criteria[criterion]}
                    onChange={() => handleToggleCriteria(criterion)}
                  />
                  {criterion}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Comparison tool */}
        <div className="comparison-tool">
          <div className="selected-universities-list">
            {[...Array(3)].map((_, index) => {
              if (index < selectedUniversities.length) {
                const university = selectedUniversities[index];
                return (
                  <div key={university.id} className="selected-university">
                    <h3>{university.name}</h3>
                    {Object.entries(criteria).map(([key, value]) => (
                      value && <p key={key}><strong>{key}: </strong>{university[key]}</p>
                    ))}
                  </div>
                );
              } else {
                return (
                  <div key={index} className="selected-university-placeholder">
                    <div className="placeholder-content">
                      <div className="icon" ><img src={uni} alt=''></img></div> {/* Replace 'Icon' with your desired icon */}
                      <p>+ Add a university</p> {/* Replace 'Add a university' with your desired text */}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComparisonTool;
