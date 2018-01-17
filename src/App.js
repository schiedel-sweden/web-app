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

            prisforslagState: {
                chimneyTypeState: {
                    chimneyType: [
                        {
                            id: 0,
                            tagline: "PERMETER",
                            ingress: "permeter"
                        },
                        {
                            id: 1,
                            tagline: "SOLID VENT",
                            ingress: "solid vent"
                        },
                        {
                            id: 2,
                            tagline: "ETESJEPIPE",
                            ingress: "etesjepipe"
                        },
                        {
                            id: 3,
                            tagline: "RONDO",
                            ingress: "rondo"
                        },
                        {
                            id: 4,
                            tagline: "KING FIRE",
                            ingress: "Peis og pipe i ett"
                        }
                    ],

                    choice: '',
                    options: [
                        'permeter',
                        'solid vent',
                        'etesjepipe',
                        'rondo',
                        'king fire'
                    ],
                },
                houseTypeState: {
                    antalPiper: '',
                    totalHeight: '',
                    heightAboveRoof: '',
                    roofAngle: '',

                    tillMone: '',
                    franMone: '',

                    calcValue: '',

                },

                chimneyState: {
                    alternative1: false,
                    alternative2: true,

                    pusset: false,
                    beslag: false,
                    feieluke: false,
                    flexiroll: false,
                    wakaflex: false,
                    topavdekning: false,
                    feieplatform: false,
                    tegelforblendet: false,
                    tetting: false,

                    wireset: false,
                    lokk: false,

                    roykinnforingLiten: '',
                    roykinnforingStor: '',

                },
                customerDataState: {
                    company: '',

                    firstName: '',
                    surName: '',

                    adress: '',
                    postnumber: '',

                    city: '',
                    country: '',

                    sameAsAbove: false,

                    receiver: '',

                    receiveAdress: '',
                    receivePostnumber: '',

                    receiverCity: '',
                    receiverCountry: '',

                },
                pricePageState: {
                    pipe: 'pipe selection',

                    gulvPipetopp: '',
                    heightAboveRoof: '',
                    roofAngle: '',
                    totalHeight: '',
                    ytterelement: '',
                    forningsror: '',
                    utsparningsmal: '',
                    andre: '',

                    totalRabatt: 0,
                    frakt: 0,

                    rowItems: [
                            {
                                number: 123,
                                antal: 0,
                                pris: 3000,
                                sum: 0,
                            },
                            {
                                number: 231,
                                antal: 0,
                                pris: 1500,
                                sum: 0,
                            },
                            {
                                number: 312,
                                antal: 0,
                                pris: 2000,
                                sum: 0,
                            },
                        ],

                    tillbud: false,
                    ordrebekreftelse: false,
                    visKunTotalsum: false,

                    nettoSum: 0,
                    moms: 0,
                    totalSum: 0,

                    beskjed: '',
                },
                orderPageState: {
                    rowItems: [
                            {
                                number: 123,
                                antal: 0,
                                pris: 3000,
                                sum: 0,
                            },
                            {
                                number: 231,
                                antal: 0,
                                pris: 1500,
                                sum: 0,
                            },
                            {
                                number: 312,
                                antal: 0,
                                pris: 2000,
                                sum: 0,
                            },
                        ],
                    kranbil: false,
                    plukket: false,
                    kjorer: false,

                    beskjed: '',
                },
            },
            produkterState: {

            },
            omOssState: {

            },
            contactUsState: {
                name: '',
                email: '',
                message: '',

            },



         };
    }

    prisforslagCallback = (state) => {
        this.setState({
            prisforslagState: state,
        });
    }
    contactUsCallback = (state) => {
        this.setState({
            contactUsState: state,
        });
    }

    navToPrisforslag = () => {
        this.setState({
            tabIndex: 1,
        });
    }
    navToProducts = () => {
        this.setState({
            tabIndex: 2,
        });
    }
    render() {
        return (
            <div class="container">

                <header className="App-header" style={{height: 60}}>
                    <img src={logo} alt="logo" />
                </header>
                    <div class="row">
                        <div class="col-md-1">
                        </div>
                        <div class="col-md-10">
                                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                                    <TabList>
                                        <Tab>Återförsäljare</Tab>
                                        <Tab>Prisförslag</Tab>
                                        <Tab>Produkter</Tab>
                                        <Tab>Om oss</Tab>
                                        <Tab>Kontakta oss</Tab>
                                    </TabList>

                                    <TabPanel><MainPage
                                                navPris={this.navToPrisforslag}
                                                navProd={this.navToProducts} />
                                    </TabPanel>
                                    <TabPanel><Prisforslag
                                                propState={this.state.prisforslagState}
                                                parentCallback={this.prisforslagCallback} />
                                    </TabPanel>
                                    <TabPanel><Produkter /></TabPanel>
                                    <TabPanel><OmOss /></TabPanel>
                                    <TabPanel><ContactUs
                                                propState={this.state.contactUsState}
                                                parentCallback={this.contactUsCallback} />
                                    </TabPanel>
                                </Tabs>
                            </div>
                        <div class="col-md-1">
                        </div>
                    </div>
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
