import React from 'react'
import { Panel, Glyphicon, Button } from 'react-bootstrap';

export default function({ children, close }) {
  return <div style={{marginTop: '3%'}} class="container">
    <Panel>
      <Panel.Heading>
      <Button onClick={close}>
        <Glyphicon glyph="remove" />
      </Button>
      </Panel.Heading>
      <Panel.Body>
        { children }
      </Panel.Body>
    </Panel>
  </div>
}
