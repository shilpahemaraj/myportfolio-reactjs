import React, { Component, Fragment } from "react";
import { Grid, cell } from "react-mdl";
import Photo from "../image/Photo.png";
import resume from "../image/resume.pdf";
const handleEmailMe = () => {
  window.open("mailto:shilpa.hemaraj03@gmail.com");
};
class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Grid className="landing-grid">
          <cell col={9}>
            <img src={Photo} alt="profile-img" className="profile-img" />

            <div className="banner-text">
              <h1> Software Engineer</h1>
              <hr />
              <p>
                SpringBoot | Hibernate | SQL | Webhook | JMS | Graphql | ReactJs
              </p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/shilpahemaraj/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" araia-hidden="true" />
                </a>
                <a
                  href="https://github.com/shilpahemaraj"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" araia-hidden="true" />
                </a>

                <a onClick={handleEmailMe} target="_blank">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a href={resume} download="resume.pdf">
                  <div className="sidebar__item sidebar__resume">
                    <b> Download Resume</b>
                  </div>
                </a>
              </div>
              
            </div>
          </cell>
        </Grid>
      </Fragment>
    );
  }
}

export default Landing;
