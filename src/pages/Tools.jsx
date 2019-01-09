import { Component } from 'react'
import Grid from '../components/Grid'
import MdGraphQLSpec from '../components/MdGraphQLSpec'
import ChordCleaner from '../components/ChordCleaner'
import ToolButton from '../components/ToolButton'
import { List } from 'immutable'

const tools = List([
  {
    title: 'Markdown GraphQL Specification Generator',
    description: 'A tool to generate graphql documentation in markdown',
    tool: MdGraphQLSpec
  },
  {
    title: 'Chord Cleaner',
    description: 'A tool to display guitar chords from popular sites in a clean, consistent format.',
    tool: ChordCleaner
  }
])

export default class Tools extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.tools = this.createToolComponents(tools)
  }

  createToolComponents(tools) {
    return tools.map(tool => ToolButton(
      Object.assign(tool, { onSelect: this.createToolActivator(tool.tool) })
    ))
  }

  selectActiveTool(active) {
    this.setState({active})
  }

  createToolActivator(Tool) {
    return () => this.selectActiveTool(Tool({close: this.createToolDeactivator()}))
  }

  createToolDeactivator() {
    return () => this.selectActiveTool(null)
  }

  render() {
    return this.state.active ?
      this.state.active
    :
      Grid({ items: this.tools, cols: 3, children: this.tools })
  }
}
