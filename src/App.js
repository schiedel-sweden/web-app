import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import logo from './logo.svg';
import './App.css';

import Tillbud from './views/Tillbud/Tillbud';
import Produkter from './views/Produkter/Produkter';
import Forhandler from './views/Forhandler/Forhandler';
import OmOss from './views/OmOss/OmOss';
import ContactUs from './views/ContactUs/ContactUs';
import MainPage from './views/Main/MainPage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { tabIndex: -1 };
    }

    render() {
        return (
            <div>
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                    <Tab>Tillbud</Tab>
                    <Tab>Produkter</Tab>
                    <Tab>Forhandler</Tab>
                    <Tab>Om oss</Tab>
                    <Tab>Kontakta oss</Tab>
                </TabList>
                <TabPanel><Tillbud /></TabPanel>
                <TabPanel><Produkter /></TabPanel>
                <TabPanel><Forhandler /></TabPanel>
                <TabPanel><OmOss /></TabPanel>
                <TabPanel><ContactUs /></TabPanel>
            </Tabs>
            {this.state.tabIndex < 0 && <MainPage />}
            </div>
        );
      }
    }



let styles = {
  icon: {
    width: 26,
    height: 26,
  },
}
let iconStyle = {
    icon: {
        height: 30,
        width: 30,
    }
}
