import React, { useState, useEffect } from "react";
import images from "../../images/images.png";
import Sidebar from "../Sidebar/Sidebar";
import view from "../../images/view.png";
import "./document.css";

export default function Document() {
  const [fileUploads, setFileUploads] = useState({
    resume: null,
    lor: null,
    sop: null,
    tenthMarksheet: null,
    twelvethMarksheet: null,
    bachelorsDegree: null,
    gre: null,
    ielts: null,
    toefl: null,
    aadhar: null,
    pan: null,
    passport: null,
  });

  const handleFileUpload = (event, category) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const fileName = selectedFile.name; // Get the file name
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        setFileUploads((prevFileUploads) => ({
          ...prevFileUploads,
          [category]: { fileName, fileContent },
        }));
        updateLocalStorage(category, { fileName, fileContent });
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const updateLocalStorage = (category, data) => {
    // Retrieve existing uploads from local storage
    const storedData = JSON.parse(localStorage.getItem("fileUploads")) || {};
    // Update or add the new upload
    storedData[category] = data;
    // Store the updated data in local storage
    localStorage.setItem("fileUploads", JSON.stringify(storedData));
  };

  useEffect(() => {
    // Retrieve data from local storage on component mount
    const storedData = JSON.parse(localStorage.getItem("fileUploads")) || {};
    setFileUploads(storedData);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const viewDocument = (fileContent) => {
    window.open(fileContent, "_blank");
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
          <div class="p-2 navbarTitle" style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "2%" }}>Documents Hub</div>
          <div class="d-flex">
            <div class="p-2 d-flex">
              <img src={images} alt="" height={55} width={55} style={{ borderRadius: "100px" }} />
              <p style={{ marginTop: "auto", marginBottom: "auto" }} ></p>
            </div>
          </div>
        </div>
        <p class="caption-text" style={{ marginTop: "-15px", marginLeft: "3%" }}> Save, Simplify, Thrive.
        </p>


        {/* Document upload form */}
        <form>
          {/* Box for "Getting to Know You" */}
          <h1>Getting to Know You</h1>
          <div className="document-container">
            {/* Box for "Resume" */}
            <div className="document-box">
              <h3>Resume</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "resume")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.resume && (
                <div className="uploaded-file">
                  <span>{fileUploads.resume.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.resume.fileContent)}
                  />
                </div>
              )}
            </div>

            {/* Box for "LOR" */}
            <div className="document-box">
              <h3>LOR</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "lor")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.lor && (
                <div className="uploaded-file">
                  <span>{fileUploads.lor.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.lor.fileContent)}
                  />
                </div>
              )}
            </div>

            {/* Box for "SOP" */}
            <div className="document-box">
              <h3>SOP</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "sop")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.sop && (
                <div className="uploaded-file">
                  <span>{fileUploads.sop.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.sop.fileContent)}
                  />
                </div>
              )}
            </div>
          </div>
          <h1>School and College Records</h1>
          <div className="document-container">
            {/* Box for "10th Marksheet" */}
            <div className="document-box">
              <h3>10th Marksheet</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "tenthMarksheet")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.tenthMarksheet && (
                <div className="uploaded-file">
                  <span>{fileUploads.tenthMarksheet.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.tenthMarksheet.fileContent)}
                  />
                </div>
              )}
            </div>
            <div className="document-box">
              <h3>12th Marksheet</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "twelvethMarksheet")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.twelvethMarksheet && (
                <div className="uploaded-file">
                  <span>{fileUploads.twelvethMarksheet.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.twelvethMarksheet.fileContent)}
                  />
                </div>
              )}
            </div>
            <div className="document-box">
              <h3>Bachelor's Degree</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "bachelorsDegree")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.bachelorsDegree && (
                <div className="uploaded-file">
                  <span>{fileUploads.bachelorsDegree.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.bachelorsDegree.fileContent)}
                  />
                </div>
              )}
            </div>
          </div>
          <h1>Aptitude and English Scores</h1>
          <div className="document-container">
            <div className="document-box">
              <h3>GRE Score</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "gre")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.gre && (
                <div className="uploaded-file">
                  <span>{fileUploads.gre.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.gre.fileContent)}
                  />
                </div>
              )}
            </div>
            <div className="document-box">
              <h3>TOEFL Score</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "toefl")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.toefl && (
                <div className="uploaded-file">
                  <span>{fileUploads.toefl.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.toefl.fileContent)}
                  />
                </div>
              )}
            </div>
            <div className="document-box">
              <h3>IELTS Score</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "ielts")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.ielts && (
                <div className="uploaded-file">
                  <span>{fileUploads.ielts.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.ielts.fileContent)}
                  />
                </div>
              )}
            </div>
          </div>
          <h1>Personal Information</h1>
          <div className="document-container">
            <div className="document-box">
              <h3>Aadhar Card</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "aadhar")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.aadhar && (
                <div className="uploaded-file">
                  <span>{fileUploads.aadhar.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.aadhar.fileContent)}
                  />
                </div>
              )}
            </div>
            <div className="document-box">
              <h3>PAN card</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "pan")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.pan && (
                <div className="uploaded-file">
                  <span>{fileUploads.pan.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.pan.fileContent)}
                  />
                </div>
              )}
            </div>
            <div className="document-box">
              <h3>Passport</h3>
              <label className="custom-file-label">
                <span className="custom-file-input">Choose File</span>
                <input type="file" onChange={(e) => handleFileUpload(e, "passport")} />
              </label>
              {/* Display uploaded file link or preview */}
              {fileUploads.passport && (
                <div className="uploaded-file">
                  <span>{fileUploads.passport.fileName}</span>
                  <img src={view} width={23} height={23} alt="View" style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() => viewDocument(fileUploads.passport.fileContent)}
                  />
                </div>
              )}
            </div>
          </div>

        </form>
        <br></br>
      </div>
    </div>
  );
}
