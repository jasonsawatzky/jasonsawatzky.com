import React from 'react'
import Tool from './Tool'

export default function({ close }) {
  return (
    <Tool close={close}>
      <h2>Markdown GraphQL Specification Generator</h2>
      <h3>md-graphql-spec</h3>
      <p>
        A tool to generate documentation for GraphQL APIs in Markdown format
      </p>
    </Tool>
  )
}
