import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import images from "../../images/images.png";
import download from "../../images/download.png";
import upload from "../../images/upload.png";
import "./assist.css";

export default function Assist() {
    const [content, setContent] = useState('');

    // Function to handle content change in the textarea
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    // Function to handle file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const fileContent = e.target.result;
            setContent(fileContent);
        };

        if (file.name.endsWith('.txt')) {
            reader.readAsText(file);
        } else {
            alert('Please upload a .txt file.');
        }
    };

    // Function to handle download content
    const handleDownloadContent = () => {
        const element = document.createElement("a");
        const file = new Blob([content], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "content.txt";
        document.body.appendChild(element);
        element.click();
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
                <div className="d-flex justify-content-between">
                    <div className="p-2 navbarTitle" style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "2%" }}>Assistance</div>
                    <div className="d-flex">
                        <div className="p-2 d-flex">
                            <img src={images} alt="" height={55} width={55} style={{ borderRadius: "100px" }} />
                            <p style={{ marginTop: "auto", marginBottom: "auto" }} ></p>
                        </div>
                    </div>
                </div>
                <p className="caption-text" style={{ marginTop: "-15px", marginLeft: "3%" }}>Collaborate for Success</p>
                <p className="essay-text" style={{ marginLeft: "6%", marginTop: "4%" }}>Ready to ensure perfection? Upload your content now to catch any errors</p>

                {/* File upload */}
                <div className="file-upload">
                    <input type="file" id="fileUpload" style={{ display: "none" }} accept=".txt" onChange={handleFileUpload} />
                    <label htmlFor="fileUpload" className="upload-button"><img src={upload} width={22} height={22} alt="upload"/>  Upload File</label>
                </div>

                {/* Grammarly check button */}
                <div className="textarea-container">
                    <textarea
                        value={content}
                        onChange={handleContentChange}
                        placeholder="Essay touch-up, begin now!...."
                        style={{fontStyle:'italic', fontSize:'15px'}}
                        className="textarea"
                    />
                </div>
                <div className="generate-essay">
                    <span>or</span> generate essay <a href="https://www.editpad.org/tool/essay-writer">click here</a>
                </div>

                {/* Download button */}
                <button
                    onClick={handleDownloadContent}
                    className="download-button"
                >
                    <img src={download} alt="Download Icon" width={20} height={20}/>  Download 
                </button>
            </div>
        </div>
    );
}