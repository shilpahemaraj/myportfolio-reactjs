import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import photoprofile from "../image/photo-profile.png";
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={photoprofile}
                alt="profile"
                style={{ height: "350px" }}
              />
            </div>
            <h2 style={{ paddingTop: "1em" }}>Shilpa Hemaraj</h2>
            <h4 style={{ color: "grey" }}>Software Engineer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              As a Software Engineer includes Analysis, Design and Development
              of quality software for Web-based applications using JAVA/ J2EE
              technologies and software development methodologies / frameworks
              like SDLC and AGILE. Strong experience in developing web
              applications using JAVA/J2EE concepts like OOP, Multithreading.
              Collections, JDBC, JSP, Servlets, Hibernate, Spring, Web services,
              Struts and Java Beans.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear="August 2018"
              endYear="Present"
              jobName="Software Engineer"
              jobClient="Avco Consulting/PayPal"
              JobCity="San Jose, California"
              jobDescription="As a Software Engineer includes Analysis, Design and Development
              of quality software for Web-based applications using JAVA/ J2EE
              technologies and software development methodologies / frameworks
              like SDLC and AGILE. Strong experience in developing web
              applications using JAVA/J2EE concepts like OOP, Multithreading.
              Collections, JDBC, JSP, Servlets, Hibernate, Spring, Web services,
              Struts and Java Beans."
            />
            <Experience
              startYear="July 2014"
              endYear="June 2018"
              jobClient="Avco Consulting/State of Michigan"
              jobName="Java/J2EE Developer"
              JobCity="Lansing, Michigan"
              jobDescription="As a Software Engineer includes Analysis, Design and Development
              of quality software for Web-based applications using JAVA/ J2EE
              technologies and software development methodologies / frameworks
              like SDLC and AGILE. Strong experience in developing web
              applications using JAVA/J2EE concepts like OOP, Multithreading.
              Collections, JDBC, JSP, Servlets, Hibernate, Spring, Web services,
              Struts and Java Beans."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2007}
              endYear={2011}
              schoolName="Visvesvaraya Technological University, DBIT"
              SchoolPlace="Bangalore, KA, India"
              schoolMajor="Electronics and Communication  - 3.0 GPA "
            />
            <Education
              startYear={2012}
              endYear={2014}
              schoolName="University of Massachusetts  "
              SchoolPlace=" Lowell , MA"
              schoolMajor="Computer Engineering - 3.5 GPA"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
