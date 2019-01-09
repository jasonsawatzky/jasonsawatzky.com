import React from 'react'
import { Panel } from 'react-bootstrap';

export default function({ onSelect, title, description }) {
  return (
    <Panel onClick={onSelect}>
      <Panel.Body>
        <h3>{title}</h3>
        <p>{description}</p>
      </Panel.Body>
    </Panel>)
}
