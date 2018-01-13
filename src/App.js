import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import logo from './images/Schiedel_logo.png';
import './App.css';

import Prisforslag from './views/Prisforslag/Prisforslag';
import Produkter from './views/Produkter/Produkter';
import Aterforsaljare from './views/Aterforsaljare/Aterforsaljare';
import OmOss from './views/OmOss/OmOss';
import ContactUs from './views/ContactUs/ContactUs';
import MainPage from './views/Main/MainPage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,

            



         };
    }

    render() {
        return (
            <div>
                <header className="App-header" style={{height: 40}}>
                    <img src={logo} alt="logo" />
                </header>
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                    <Tab>Återförsäljare</Tab>
                    <Tab>Prisförslag</Tab>
                    <Tab>Produkter</Tab>
                    <Tab>Om oss</Tab>
                    <Tab>Kontakta oss</Tab>
                </TabList>

                <TabPanel><MainPage /></TabPanel>
                <TabPanel><Prisforslag /></TabPanel>
                <TabPanel><Produkter /></TabPanel>
                <TabPanel><OmOss /></TabPanel>
                <TabPanel><ContactUs /></TabPanel>
            </Tabs>
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
