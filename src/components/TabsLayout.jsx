import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import ToolsPage from './pages/Tools'

export default function() {
  return (
    <Tabs defaultActiveKey={1}>
      <Tab eventKey={1} title='General'>
      </Tab>
      <Tab eventKey={2} title='Resume'>
      </Tab>
      <Tab eventKey={3} title='Contact'>
      </Tab>
      <Tab eventKey={4} title='Tools'>
        <ToolsPage></ToolsPage>
      </Tab>
    </Tabs>
  )
}
