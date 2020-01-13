import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import { Link } from "react-router-dom";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "156px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlavGtkAIwZS210J5aJsj5qglYcbRD_wviT-fi7xecO-NTw4qe) center / cover"
              }}
            ></CardTitle>

            <CardText>SpringbootRestAPIReactJSMicroservice</CardText>
            <CardActions boarder>
              <Link to="https://github.com/shilpahemaraj/SpringbootRestAPIReactJSMicroservice" />
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "170px",
                background:
                  " url (data:image/png;base64,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) center / cover "
              }}
            ></CardTitle>
            <CardText>amplifyreactgraphqlblogapp</CardText>
            <CardActions boarder>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "170px",
                background:
                  " url (https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3qpBF5isq2WIwj-E9sOp7oChrvJ5FhJTLsrvG71JQ2YyWCHyB) center / cover "
              }}
            ></CardTitle>
            <CardText>myportfolio-reactjs</CardText>
            <CardActions boarder>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Springboot</Tab>
          <Tab>Graphql</Tab>
          <Tab>React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
