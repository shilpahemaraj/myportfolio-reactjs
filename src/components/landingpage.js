import React, { Component } from "react";
import { Grid, cell } from "react-mdl";
import Photo from "../image/Photo.png";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <cell col={12}>
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
              </div>
            </div>
          </cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
