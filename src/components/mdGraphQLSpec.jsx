import React from 'react'
import { Panel, Glyphicon, Button } from 'react-bootstrap';

export default function({ close }) {
  return <div style={{marginTop: '3%'}} class="container">
    <Panel>
      <Panel.Heading>
      <Button onClick={close}>
        <Glyphicon glyph="remove" />
      </Button>
      </Panel.Heading>
      <Panel.Body>
        <h2>md-graphql-spec</h2>
        <p>
          A tool to generate documentation for GraphQL APIs in Markdown format
        </p>
      </Panel.Body>
    </Panel>
  </div>
}
