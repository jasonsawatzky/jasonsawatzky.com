import React from 'react'
import Tool from './Tool'
import githubIcon from '../images/github.png'

export default function({ close }) {
  return (
    <Tool close={close}>
      <h2>Markdown GraphQL Specification Generator</h2>
      <a href="https://www.github.com/jasonsawatzky/md-graphql-spec" target="_blank"  rel="noopener noreferrer">
        <h3>md-graphql-spec <img className="twitter" src={githubIcon} width="40" alt="twitter"/></h3>
      </a>
      <p>
        A tool to generate documentation for GraphQL APIs in Markdown format
      </p>
    </Tool>
  )
}
