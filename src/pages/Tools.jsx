import React from 'react'
import Grid from '../components/Grid'

const items = [
  {
    title: 'md-graphql-spec',
    description: 'A tool to generate graphql documentation in markdown'
  },
  {
    title: 'Test Tool 1',
    description: 'A test tool'
  },
  {
    title: 'Test Tool 2',
    description: 'A test tool'
  },
  {
    title: 'Test Tool 3',
    description: 'A test tool'
  },
  {
    title: 'Test Tool 4',
    description: 'A test tool'
  },
  {
    title: 'Test Tool 5',
    description: 'A test tool'
  },
  {
    title: 'Test Tool 6',
    description: 'A test tool'
  },
]

export default function() {
  return <><Grid items={items} cols={3}/></>
}
