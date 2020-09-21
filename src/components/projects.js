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
  CardMenu,
} from "react-mdl";

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
                  "url(https://blog.indrek.io/images/2019-01-05-spring-boot-reactjs/cover.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Achieved Microservices by using Springboot for backend and React
              for frontend
            </CardText>
            <CardActions boarder>
              <a
                href={
                  "https://github.com/shilpahemaraj/SpringbootRestAPIReactJSMicroservice"
                }
                target="_blank"
              >
                Github
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "156px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAXtCuld_-fK5TKpJMQ0DAwTcT0avVuNDDjA&usqp=CAU) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Used Rest API to communicate between two applications
            </CardText>
            <CardActions boarder>
              <a
                href={"https://github.com/shilpahemaraj/SpringBootEndtoEnd"}
                target="_blank"
              >
                Github
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "165px",
                background:
                  "url(https://www.geo-viz.com/wp-content/themes/geoviz/js/timthumb.php?src=https://www.geo-viz.com/wp-content/uploads/2015/09/java-spring-hibernate.jpg&h=280&w=600) center / cover",
              }}
            ></CardTitle>
            <CardText>Spring MVC with Hibernate for ORM layer </CardText>

            <CardActions boarder>
              <a
                href={
                  "https://github.com/shilpahemaraj/MVCUsingSpringHibernate"
                }
                target="_blank"
              >
                Github
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
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
                height: "165px",
                background:
                  " url(https://res.cloudinary.com/practicaldev/image/fetch/s--h70K2OX2--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://thepracticaldev.s3.amazonaws.com/i/9ycncydh8czhwfk9k5kb.png) center / cover ",
              }}
            ></CardTitle>
            <CardText>Implemented blog app using React and Graphql</CardText>

            <CardActions boarder>
              <a
                href={
                  "https://github.com/shilpahemaraj/amplifyreactgraphqlblogapp"
                }
                target="_blank"
              >
                Github
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
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
                  " url(https://scotch-res.cloudinary.com/image/upload/w_auto,q_auto:good,f_auto/media/16966/WTuIcUkIRmyQ6fL58pCt_1_vHHBwcUFUaHWXntSnqKdCA.png.jpg) center / cover ",
              }}
            ></CardTitle>
            <CardText>Build portfolio using React and React Router</CardText>
            <CardActions boarder>
              <a
                href={"https://github.com/shilpahemaraj/myportfolio-reactjs"}
                target="_blank"
              >
                Github
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
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
          onChange={(tabId) => this.setState({ activeTab: tabId })}
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
