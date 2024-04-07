import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Footer from "./Footer";
import Typical from "react-typical";
import img1 from "../images/icon1.png";
import img2 from "../images/icon2.jpeg";
import img3 from "../images/icon3.jpg";
import link from "../images/link.png";
import resume from "./Aman.pdf";
import profile from "../images/Profile.jpg";
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        fixed="top"
        style={{ backgroundColor: "#22273a" }}
        className="d-flex justify-content-end"
      >
        <Navbar.Brand href="/">
          <img
            src={profile}
            height={"100%"}
            width={"5%"}
            className="nav-profile"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#resume"
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#achievements"
            >
              Achievements
            </Nav.Link>
            <Nav.Link
              href="#contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="profile-container text-center pt-5" id="home">
        <div className="profile-parent">
          <div className="row m-0 p-5">
            <div className="col-lg-6">
              <div className="profile-picture">
                <img
                  src={profile}
                  height={"auto"}
                  width={"45%"}
                  style={{ borderRadius: "15px" }}
                  className="shadow border border-white"
                />
              </div>
              <div className="pt-3 h3">AMAN KAKKAR</div>
              <div className="container text-center pt-3">
                <a
                  href="https://www.linkedin.com/in/aman-kakkar-2355291b3/"
                  target="_blank"
                  className="mx-2 h3 text-white"
                >
                  <span>
                    <FaLinkedin className="linkedin" />
                  </span>
                </a>
                <a
                  href="https://github.com/amankakkar2002"
                  target="_blank"
                  className="mx-2 h3 text-white"
                >
                  <span>
                    <FaGithub className="github" />
                  </span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCaZvyFmrHfUymcMFwcqcFJw"
                  target="_blank"
                  className="mx-2 h3 text-white"
                >
                  <span className="youtubeicon">
                    <FaYoutube />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/_the.mist_"
                  target="_blank"
                  className="mx-2 h3 text-white"
                >
                  <span className="instaicon">
                    <FaInstagram />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 pt-5">
              <div className="profile-details">
                <div className="profile-details-role">
                  <span className="primary-text">
                    <h2>
                      {" "}
                      Hello, I'm
                      <Typical
                        className="pt-3"
                        loop={Infinity}
                        steps={[
                          "Aman Kakkar 👤",
                          3500,
                          "A DEVELOPER 💻",
                          3500
                        ]}
                      />
                    </h2>
                    <span className="profile-role-tagline h5">
                      Quick Learner, Problem Solver, Enthusiastic Developer.
                    </span>
                  </span>
                </div>
                <div className="pt-3">
                  <a
                    href={resume}
                    className="btn btn-primary m-2"
                    download={resume}
                  >
                    Get Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="resume">
        <div className="container pt-5">
          {/* <div className="text-center">
          <div className="h1">Experience & Education</div>
          <hr className="bg-grey" style={{ width: "10%", height: "16px" }} />
        </div> */}
          <div className="row">
            <div className="col-md-6">
              <div class="experience h2 text-center">Experience</div>
              <hr
                className="bg-grey"
                style={{ width: "10%", height: "16px" }}
              />
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="circle-content px-4 mb-3 h3">OnActuate</div>
                  <div className="px-4">
                    <span className="time-period px-3 py-2">
                      January 2024 - Present
                    </span>
                  </div>
                </div>
                <div className="role py-3 pb-4 px-4">
                  Role - <u>Business Central Technical Trainee</u>
                </div>
                <div className="pb-3 px-4">
                  <span>
                    <ul>
                      <li>Working on Internal Projects.</li>
                      <li>
                        Created a Transporter-Drivers Management system in Demo
                        Version.
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="circle-content mb-3 h3 px-4">ExpertBells</div>
                  <div className="px-4">
                    <span className="time-period px-3 py-2">
                      June 2023 - July 2023
                    </span>
                  </div>
                </div>
                <div className="role px-4 py-3 h5">
                  Role - <u>Frontend Web Developer</u>
                </div>
                <div className="pb-3 px-4">
                  <span>
                    <ul>
                      <li>
                        Updated more than 15 live pages on their official
                        website.
                      </li>
                      <li>
                        Created more than 10 new functionalities using HTML,
                        CSS, JS and BOOTSTRAP.
                      </li>
                      <li>Deployed more than 10 designs on the live server.</li>
                    </ul>
                  </span>
                </div>
              </div>
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="circle-content mb-3 h3 px-4">
                    Intern CoE-AIE
                  </div>
                  <div className="px-4">
                    <span className="time-period px-3 py-2">
                      May 2023 - June 2023
                    </span>
                  </div>
                </div>
                <div className="role px-4 py-3">
                  Role - <u>Machine Learning Intern</u>
                </div>
                <div className="pb-3 px-4">
                  <ul>
                    <li>
                      Mini Project on Multi criteria decision making technique
                      (TOPSIS)
                    </li>
                    <li>
                      {" "}
                      Implemented a Machine Learning model using TOPSIS for
                      searching based on user personalizations.
                    </li>
                    <li>Research Paper is completed, but not yet published.</li>
                  </ul>
                </div>
              </div>
              <div class="experience h2 text-center">Education</div>
              <hr
                className="bg-grey"
                style={{ width: "10%", height: "16px" }}
              />
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="circle-content mb-3 h3 px-4">
                    BTech in Information Technology
                  </div>
                  <div className="px-4">
                    <span className="time-period px-3 py-2">
                      Aug 2020 - June 2024
                    </span>
                  </div>
                </div>
                <div className="role px-4 py-3 pb-4">
                  <ul>
                    <li>
                      College -{" "}
                      <u>Jaypee Institute of Information Technology</u>
                    </li>
                    <li>
                      CGPA - <u>8.2</u>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="px-4 circle-content mb-3 h3">
                    Senior School
                  </div>
                  <div className="px-4">
                    <span className="time-period px-3 py-2">
                      April 2018 - March 2020
                    </span>
                  </div>
                </div>
                <div className="role px-4 py-3 pb-4">
                  <ul>
                    <li>
                      School - <u>KDB Public School</u>
                    </li>
                    <li>
                      Percentage - <u>92.2%</u>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="px-4 circle-content mb-3 h3">High School</div>
                  <div className="px-4">
                    <span className="time-period px-3 py-2">
                      April 2005 - March 2018
                    </span>
                  </div>
                </div>
                <div className="role py-3 px-4 pb-4">
                  <ul>
                    <li>
                      School - <u>St. Joseph's Academy</u>
                    </li>
                    <li>
                      Percentage - <u>92.2%</u>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div class="experience h2 text-center">Skills</div>
              <hr
                className="bg-grey"
                style={{ width: "10%", height: "16px" }}
              />
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="circle-content mb-3 h3 px-4">
                    Microsoft Dynamics 365
                  </div>
                  <div className="px-4">
                    <span className="time-period px-3 py-2">
                      Business Central / Navision
                    </span>
                  </div>
                </div>
                <div className="pb-3 px-4 pt-4">
                  <span>
                    <ul>
                      <li>AL Programming Language for Business Central</li>
                      <li>C/AL for Navision</li>
                    </ul>
                  </span>
                </div>
              </div>
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="circle-content mb-3 px-4 h3">
                    Web Development
                  </div>
                  <div className="px-4">
                    <span className="time-period px-3 py-2">
                      Frontend Development
                    </span>
                  </div>
                </div>
                <div className="pb-3 px-4 pt-4">
                  <span>
                    <ul>
                      <li>React JS, HTML, CS, JS, BOOTSTRAP</li>
                    </ul>
                  </span>
                </div>
                <div className="px-4">
                  <span className="time-period px-3 py-2">
                    Backend and Database Development
                  </span>
                </div>
                <div className="pb-3 px-4 pt-4">
                  <span>
                    <ul>
                      <li>Node JS, Python, MySQL, MongoDB</li>
                    </ul>
                  </span>
                </div>
              </div>
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="circle-content mb-3 px-4 h3">
                    Programming / Coding
                  </div>
                  <div className="px-4">
                    <span className="time-period py-2 px-3">
                      Coding Languages
                    </span>
                  </div>
                  <div className="px-4 mt-4">
                    <ul>
                      <li>C++ for Data Structures & Algorithms</li>
                      <li>Python for Machine Learning</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="experience h2 text-center">Certifications</div>
              <hr
                className="bg-grey"
                style={{ width: "10%", height: "16px" }}
              />
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="circle-content mb-3 h3 px-4">
                    Amazon ML Summer School 2023
                  </div>
                  <div className="px-4">
                    <span className="time-period px-3 py-2">
                      September 2023 - October 2023
                    </span>
                  </div>
                </div>
                <div className="role px-4 py-3 pb-4">
                  <ul>
                    <li>
                      Cleared Selection Procedure that was hosted in PAN India.
                    </li>
                    <li>
                      Received goodies from Amazon for successfully completing
                      the course.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="circle-content mb-3 h3 px-4">
                    Mastering Data Structures in C and C++
                  </div>
                  <div className="px-4">
                    <span className="time-period px-3 py-2">
                      November 2022 - March 2023
                    </span>
                  </div>
                </div>
                <div className="role px-4 py-3 pb-4">
                  <ul>
                    <li>Learnt basic to advance concepts of C++.</li>
                    <li>
                      Learnt and applied the concepts of data structures in
                      projects and Competitive Programming platforms.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-left">
                <div>
                  <span className="circle"></span>
                  <div className="circle-content px-4 mb-3 h3">
                    MySQL Database Development Mastery
                  </div>
                  <div className="px-4">
                    <span className="time-period px-3 py-2">
                      November 2021 - March 2022
                    </span>
                  </div>
                </div>
                <div className="role py-3 px-4 pb-4">
                  <ul>
                    <li>
                      Implemented the learnt syntax and achieved Gold Badge in
                      SQL queries on HackerRank platform.
                    </li>
                    <li>
                      Solved more than 45 questions on HackerRank to achieve
                      Gold Badge in SQL.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-4" id="projects">
        <div className="container py-3 text-center">
          <h1 className="">Projects</h1>
          <div className="row py-3">
            <div className="col-lg-4 py-2 text-center align-self-center">
              <a href="https://swap-ease-now.vercel.app" target="_blank">
                <div className="shadow">
                  <div className="row p-2">
                    <div className="col-7 h5 d-flex justify-content-center align-items-center">
                      SwapEase
                    </div>
                    <div className="col-5 ">
                      <img
                        src={img1}
                        style={{ height: "auto", width: "40%" }}
                      ></img>
                    </div>
                  </div>
                  <hr style={{ width: "80%", margin: "auto" }}></hr>
                  <div className="px-3 py-2" style={{ color: "black" }}>
                    <p>
                      Made it easy for students to swap subjects easily, check
                      how many more classes they have to attend for given
                      criteria and get previous year Q papers.
                    </p>
                  </div>
                  <hr style={{ width: "80%", margin: "auto" }}></hr>
                  <div className=" py-3">
                    <a className="btn btn-success text-white">View Website</a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 py-2 text-center align-self-center">
              <a
                href="https://github.com/amankakkar2002/Online-Compiler"
                target="_blank"
              >
                <div className="shadow">
                  <div className="row p-2">
                    <div className="col-1"></div>
                    <div className="col-6 h5 d-flex justify-content-center align-items-center">
                      <div> Online Compiler</div>
                    </div>
                    <div className="col-5 ">
                      <img
                        src={img2}
                        style={{ height: "auto", width: "40%" }}
                      ></img>
                    </div>
                  </div>
                  <hr style={{ width: "80%", margin: "auto" }}></hr>
                  <div className="px-3 py-2" style={{ color: "black" }}>
                    <p>
                      Build an Online Compiler for languages C, C++ and Python
                      with additional features such as doodle board and online
                      event links, to remove the need of carrying notebooks.
                    </p>
                  </div>
                  <hr style={{ width: "80%", margin: "auto" }}></hr>
                  <div className=" py-3">
                    <a className="btn btn-success text-white">View Code</a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 py-2 text-center align-self-center">
              <a
                href="https://github.com/amankakkar2002/TechnoGamerz"
                target="_blank"
              >
                <div className="shadow">
                  <div className="row p-2">
                    <div className="col-1"></div>
                    <div className="col-6 h5 d-flex justify-content-center align-items-center">
                      <div> Technogamerz</div>
                    </div>
                    <div className="col-5 ">
                      <img
                        src={img3}
                        style={{
                          height: "auto",
                          width: "40%",
                          borderRadius: "50%",
                        }}
                      ></img>
                    </div>
                  </div>
                  <hr style={{ width: "80%", margin: "auto" }}></hr>
                  <div className="px-3 py-2" style={{ color: "black" }}>
                    <p>
                      A simple yet effective, user-friendly mini games website
                      with cool transition effects and animations, consisting of
                      three games, inlcuding tic tac toe and speed typing.
                    </p>
                  </div>
                  <hr style={{ width: "80%", margin: "auto" }}></hr>
                  <div className=" py-3">
                    <a className="btn btn-success text-white">View Code</a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="achievements">
        <div class="experience h2 text-center">Achievements</div>
        <hr className="bg-grey" style={{ width: "10%", height: "16px" }} />
        <div className="container achievements">
          <div className="row py-5">
            <div className="h5 col-lg-2">
              <div className="shadow p-2" style={{height:'180px'}}>
                <a href="https://drive.google.com/file/d/1HJoYoVwGFUUGl4Ey9yAN-161s4izFDa3/view">
                  Copyright for creating a formula for finding if a number is
                  prime or not.{" "}
                  <img src={link} height={"20px"} width={"auto"} />
                </a>
              </div>
            </div>
            <div className="h5 col-lg-2 ">
              <div className="shadow p-2" style={{height:'180px'}}>
                <a href="https://www.hackerrank.com/profile/kakkaraman68">
                  SQL- Gold badge holder on Hackerrank.{" "}
                  <img src={link} height={"20px"} width={"auto"} />
                </a>
              </div>
            </div>
            <div className="h5 col-lg-2">
              <div className="shadow p-2" style={{height:'180px'}}>
                <a href="https://swap-ease-now.vercel.app">
                  100+ Registrations on SwapEase Web App in less than 24 hours
                  of hosting live.{" "}
                  <img src={link} height={"20px"} width={"auto"} />
                </a>
              </div>
            </div>
            <div className="h5 col-lg-2">
              <div className="shadow p-2" style={{height:'180px'}}>
                <a href="https://www.hackerrank.com/profile/kakkaraman68">
                  C++ - Gold badge holder on Hackerrank.{" "}
                  <img src={link} height={"20px"} width={"auto"} />
                </a>
              </div>
            </div>
            <div className="h5 col-lg-2">
              <div className="shadow p-2" style={{height:'180px'}}>
                <a href="https://www.hackerrank.com/profile/kakkaraman68">
                  Problem Solving Skills certified on Hackerrank.{" "}
                  <img src={link} height={"20px"} width={"auto"} />
                </a>
              </div>
            </div>
            <div className="h5 col-lg-2">
              <div className="shadow p-2" style={{height:'180px'}}>
                <a href="https://auth.geeksforgeeks.org/user/kakkaraman68/practice">
                  140+ Questions solved on GeeksForGeeks.{" "}
                  <img src={link} height={"20px"} width={"auto"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact"></section>
      <Footer />
    </>
  );
};

export default Home;
