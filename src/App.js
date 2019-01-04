import React, { Component } from 'react';
import logo from './logo.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './sass/App.scss';

class App extends Component {
  render() {
    return (
  <Tabs>
    <TabList>
      <Tab>General</Tab>
      <Tab>Resume</Tab>
      <Tab>Projects</Tab>
      <Tab>Tools</Tab>
      <Tab>Contact</Tab>
    </TabList>

    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
  </Tabs>
    );
  }
}

export default App;
