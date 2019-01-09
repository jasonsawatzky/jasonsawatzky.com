import React, { Component } from 'react'
import Grid from '../components/Grid'
import mdGraphQLSpec from '../components/mdGraphQLSpec'
import ToolButton from '../components/ToolButton'
import { List } from 'immutable'



export default class Tools extends Component {
  constructor(props) {
    super(props);

    this.tools = List([
      <ToolButton title='md-graphql-spec'
        description='A tool to generate graphql documentation in markdown'
        onSelect={this.createToolActivator(mdGraphQLSpec({close: this.createToolDeactivator()}))}
      />
    ])

    this.state = {}
  }

  selectActiveTool(active) {
    this.setState({ active })
  }

  createToolActivator(tool) {
    return () => this.selectActiveTool(tool)
  }

  createToolDeactivator() {
    return (() => this.selectActiveTool(null))
  }

  render() {
    return this.state.active ?
      this.state.active :
      <Grid items={this.tools} cols={3}/>
  }
}
