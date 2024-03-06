import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import coins from "../../images/coins.png";
import images from "../../images/images.png";
import vtour1 from "../../images/vtour1.png";
import vtour2 from "../../images/vtour2.png";
import vtour3 from "../../images/vtour3.png";
import vtour4 from "../../images/vtour4.png";
import vtour5 from "../../images/vtour5.png";
import vtour6 from "../../images/vtour6.png";
import vtour7 from "../../images/vtour7.png";
import vtour8 from "../../images/vtour8.png";
import vtour9 from "../../images/vtour9.png";
import "./tour.css";
export default function Tour() {


  const handleView360 = () => {
    // Implement the logic to navigate to the 360° view
    // For example, use React Router or any other navigation method
    console.log("Viewing in 360°");
  };

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
          <div class="p-2 navbarTitle" style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "2%" }}>Virtual Campus Tour</div>
          <div class="d-flex">
            <div class="p-2 d-flex">
              <img src={images} alt="" height={55} width={55} style={{ borderRadius: "100px" }} />
              <p style={{ marginTop: "auto", marginBottom: "auto" }} ></p>
            </div>
          </div>
        </div>
        <p class="caption-text" style={{ marginTop: "-15px", marginLeft: "3%" }}>Click, roam, discover.</p>


{/* University cards */}
        <div className="card-container">

          <div className="custom-card">
            <img src={vtour1} alt="College" />
            <h3>Massachusetts Institute of Technology(MIT)</h3>
            <p>Cambridge United States</p>
            <a href="https://maps.app.goo.gl/oW4R91xfSghXQpS37" target="_blank" rel="noopener noreferrer">
              Explore Campus
            </a>
          </div>
          <div className="custom-card">
            <img src={vtour3} alt="College" />
            <h3>Georgia Institute of Technology (Georgia Tech)</h3>
            <p>Atlanta United States</p>
            <a href="https://maps.app.goo.gl/xS7TixXBL9RcDm3w5" target="_blank" rel="noopener noreferrer">
              Explore Campus
            </a>
          </div>
          <div className="custom-card">
            <img src={vtour4} alt="College" />
            <h3>University of California Berkeley (UCB)</h3>
            <p>Berkeley United States</p>
            <a href="https://maps.app.goo.gl/ujhPFyYVaF4H1uop9" target="_blank" rel="noopener noreferrer">
              Explore Campus
            </a>
          </div>
          <div className="custom-card">
            <img src={vtour2} alt="College" />
            <h3>New York University (NYU)</h3>
            <p>New York City United States</p>
            <a href="https://maps.app.goo.gl/eSCgQRVyMGPuhvzv7" target="_blank" rel="noopener noreferrer" >
              Explore Campus
            </a>
          </div>
          <div className="custom-card">
            <img src={vtour5} alt="College" />
            <h3>Harvard University</h3>
            <p>Cambridge United States</p>
            <a href="https://maps.app.goo.gl/CQ48fSXaKZhwyswM8" target="_blank" rel="noopener noreferrer">
              Explore Campus
            </a>
          </div>
          <div className="custom-card">
            <img src={vtour6} alt="College" />
            <h3>Stanford University</h3>
            <p>Stanford United States</p>
            <a href="https://maps.app.goo.gl/7HTXQxv4oxEyq3nTA" target="_blank" rel="noopener noreferrer">
              Explore Campus
            </a>
          </div>
          <div className="custom-card">
            <img src={vtour7} alt="College" />
            <h3>University of Chicago</h3>
            <p>Chicago United States</p>
            <a href="https://maps.app.goo.gl/pthgY6N8PcS1DQxx6" target="_blank" rel="noopener noreferrer">
              Explore Campus
            </a>
          </div>
          <div className="custom-card">
            <img src={vtour8} alt="College" />
            <h3>Michigan State University</h3>
            <p>East Lansing United States</p>
            <a href="https://maps.app.goo.gl/PoPT8giDoh9bguVH8" target="_blank" rel="noopener noreferrer">
              Explore Campus
            </a>
          </div>
          <div className="custom-card">
            <img src={vtour9} alt="College" />
            <h3>Arizona State University</h3>
            <p>Tempe United States</p>
            <a href="https://maps.app.goo.gl/M9asjZDTxGQe3Wyn9" target="_blank" rel="noopener noreferrer">
              Explore Campus
            </a>
          </div>




        </div>


      </div>
    </div>
  );
}
