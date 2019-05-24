import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const Projects = () => (
  // return (
  <div className="container-fluid">
    <div className="row-fluid">
      <div className="head2">
        <h4>Our Projects</h4>
      </div>
      <div style={{ marginBottom: "30px" }} />
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>Sara Industies </ListGroupItemHeading>
          <ListGroupItemText>Sara Industrial estate Selaqui</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading />
          <ListGroupItemText />
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading />
          <ListGroupItemText />
        </ListGroupItem>
      </ListGroup>
    </div>
    <div />
  </div>
  // );
);

export default Projects;
