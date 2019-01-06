import React from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap';

export default () =>
<Grid style={{marginTop: '3%'}}>
  <Row className="show-grid">
  </Row>
  <Row className="show-grid">
    <Col xs={12} md={6}>
      <Panel>
        <Panel.Body>Basic panel example</Panel.Body>
      </Panel>
    </Col>
    <Col xs={12} md={6}>
      <Panel>
        <Panel.Body>Basic panel example</Panel.Body>
      </Panel>
    </Col>
  </Row>
</Grid>
