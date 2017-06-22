import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import styles from "../../../styles/pages/home/home.less";

import EchoEngTeamBody from "./echoEngTeamBody.jsx";

export default class EchoEngTeam extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <EchoEngTeamBody />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
