import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import feelinglost from "../../images/feelinglost.png";
import circleGrp from "../../images/Group 74.png";
import circleGrp1 from "../../images/Group 75.png";
import circleGrp2 from "../../images/Ellipse 17.png";
import circleGrp3 from "../../images/Group 76.png";
import college from "../../images/college.png";
import guide from "../../images/guide.png";
import notification from "../../images/notification.png";
import top1 from "../../images/top1.jpg";
import top2 from "../../images/top2.jpg";
import top3 from "../../images/top3.jpg";
import shareImg from "../../images/shareImg.png";
import flightImg from "../../images/flightImg.png";
import chatImg from "../../images/chatImg.png";
import viewImg from "../../images/viewsImg.png";
import bookmarkImg from "../../images/bookmarkImg.png";
import chooseUsImg from "../../images/chooseUsImg.png";
import KYUImg from "../../images/KYUImg.png";
import Navbar from "../Navbar/Navbar";
export default function Home() {


  return (
    <div>
      <Navbar />
      <img src={circleGrp3} className="grp3" alt="" />
      <div className="container div1">
        <div className="row">
          <div className="col-7">
            <img className="overwhelmed" src={feelinglost} alt="" />
            <p
              className="welcometxt"
              style={{ marginTop: "35px", marginLeft: "35px" }}
            >
              Navigate the Crossroads <br /> of University and  Success <br /> with UniQuest
            </p>
            <Link to="./assessment">
              <button
                className="btngrad"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Get Started
              </button></Link>
            <img src={circleGrp2} className="grp2" alt="" />
            <img src={circleGrp1} className="grp1" alt="" />
          </div>

          <div className="col-5">
            <img src={circleGrp} className="grp" alt="" />
          </div>
        </div>
      </div>

      <div className="container div2">
        <p className="heading">Navigate Your Journey with Us</p>

        <div className="row" style={{ marginTop: "5%" }}>
          <div className="col">
            <div class="card card-1">
              <img
                class="card-img-top card1-img"
                src={college}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title card1-title" >One Stop Solution</h5>
                <p class="card-text card1-para">
                  Discover your perfect college match with UniQuest!
                  Share your academic interests and campus preferences,
                  and our smart algorithms will curate personalized recommendations
                  just for you.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card card-1">
              <img
                class="card-img-top card1-img"
                src={guide}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title card1-title">Guidance & Support</h5>
                <p class="card-text card1-para">
                  {" "}
                  Let us be your compass in the sea of choices, guiding you
                  until you discover the university that feels like home.
                  With personalized advice and unwavering support, we'll help
                  you navigate the path to your dream school effortlessly.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card card-1">
              <img
                class="card-img-top card1-img"
                src={notification}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title card1-title">Stay Informed</h5>
                <p class="card-text card1-para">
                  Stay ahead of the curve with timely alerts and notifications,
                  keeping you in the know about all the latest information regarding
                  your college choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container div3">
        <p className="heading">Top Universities</p>
        <div className="row">
          <div className="col">
            <div style={{ marginTop: "3%" }}>
              <div class="card card-2">
                <img
                  class="card-img-top card2-img foryou-img"
                  src={top1}
                  alt="Card image cap"

                />
                <div class="card-body">
                  <div className="row">
                    <div className="col-10">
                      <h5 class="card-title card2-title">
                        Massachusetts Institute of Technology(MIT), USA
                      </h5>
                    </div>
                    <div className="col-2">
                      <img src={bookmarkImg} alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <img src={shareImg} alt="" />
                    </div>
                    <div className="col-2">
                      <img src={flightImg} style={{ width: "35px" }} alt="" />
                    </div>
                    <div className="col-2">
                      <img src={chatImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div style={{ marginTop: "3%" }}>
              <div class="card card-2">
                <img
                  class="card-img-top card2-img foryou-img"
                  src={top2}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <div className="row">
                    <div className="col-10">
                      <h5 class="card-title card2-title">
                        Stanford University, California, USA
                      </h5>
                    </div>
                    <div className="col-2">
                      <img src={bookmarkImg} alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <img src={shareImg} alt="" />
                    </div>
                    <div className="col-2">
                      <img src={flightImg} style={{ width: "35px" }} alt="" />
                    </div>
                    <div className="col-2">
                      <img src={chatImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div style={{ marginTop: "3%" }}>
              <div class="card card-2">
                <img
                  class="card-img-top card2-img foryou-img"
                  src={top3}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <div className="row">
                    <div className="col-10">
                      <h5 class="card-title card2-title">
                        Harvard University, Massachusetts, USA
                      </h5>
                    </div>
                    <div className="col-2">
                      <img src={bookmarkImg} alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <img src={shareImg} alt="" />
                    </div>
                    <div className="col-2">
                      <img src={flightImg} style={{ width: "35px" }} alt="" />
                    </div>
                    <div className="col-2">
                      <img src={chatImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container div4">
        <p className="heading">Why choose us?</p>

        <div className="chooseUs">
          <ul class="list-group">
            <li class="list-group-item">
              <img src={chooseUsImg} alt="Tick image" />
              <div className="chooseUsRight">
                <h2 className="chooseUsHeading">Discover Your Path</h2>
                <p className="chooseUsPara">
                  Embark on a journey of self-discovery as you uncover
                  your unique path towards academic success with our
                  innovative guidance system.
                </p>
              </div>
            </li>
            <li class="list-group-item">
              <img src={chooseUsImg} alt="Tick image" />
              <div className="chooseUsRight">
                <h2 className="chooseUsHeading">Stay Ahead, Stress-Free</h2>
                <p className="chooseUsPara">
                  Our platform ensures a stress-free admissions process by keeping
                  you on track with timely alerts and a clear Admission Timeline,
                  ensuring you never miss a deadline or important milestone.
                </p>
              </div>
            </li>
            <li class="list-group-item">
              <img src={chooseUsImg} alt="Tick image" />
              <div className="chooseUsRight">
                <h2 className="chooseUsHeading">Dive Deep, Decide Confidently</h2>
                <p className="chooseUsPara">
                  Empower your journey with effortless exploration and informed decision-making
                  on our platform, offering comprehensive tools for university and program comparison,
                  virtual campus tours.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

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
}
