import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import styles from "../../../styles/pages/home/home.less";

import EchoEngHeader from "./echoEngHeader.jsx";
import EchoEngBody from "./echoEngBody.jsx";
import EchoEngFooter from "./echoEngFooter.jsx";

export default class EchoEngHome extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <EchoEngHeader />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <EchoEngBody />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <EchoEngFooter />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
