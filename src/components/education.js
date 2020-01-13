import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear}-{this.props.startYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
          <h6>{this.props.SchoolPlace}</h6>
          <h6>{this.props.schoolMajor}</h6>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
