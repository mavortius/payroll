import React from "react";
import {Link} from "react-router-dom";
import {Button, Container} from "reactstrap";

const Home = () => (
  <Container fluid>
    <Button color="link">
      <Link to="/employees">Manage Employees</Link>
    </Button>
  </Container>
);
export default Home