import React from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap';

export default function({ items, cols }) {
  return <Grid style={{marginTop: '3%'}}> {renderRows(items, cols)} </Grid>
}

function renderItem(item, cols) {
  return (
    <Col xs={12} md={(12 / cols)}>
      <Panel>
        <Panel.Body>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Panel.Body>
      </Panel>
    </Col>
  )
}

function renderRow(row, cols) {
  return <Row> {row.map(item => renderItem(item, cols))} </Row>
}

function renderRows(items, cols) {
  return !items.length ?
    [] :
    [renderRow(items.slice(0, cols), cols), renderRows(items.slice(cols), cols)]
}
