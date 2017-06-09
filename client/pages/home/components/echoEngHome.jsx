import React from "react";
import { Grid, Row, Col, Well } from "react-bootstrap";

import EchoEngHeader from "./echoEngHeader.jsx";
import EchoEngBody from "./echoEngBody.jsx";
import EchoEngFooter from "./echoEngFooter.jsx";

export default class EchoEngHome extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Well>
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
          </Well>
        </Grid>
      </div>
    );
  }
}