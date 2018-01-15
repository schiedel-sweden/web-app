import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ChimneyType from '../ChimneyType/ChimneyType';
import HouseType from '../HouseType/HouseType';
import Chimney from '../Chimney/Chimney';
import CustomerData from '../CustomerData/CustomerData';
import PricePage from '../PricePage/PricePage';
import OrderPage from '../Order/OrderPage';

export default class Tillbud extends Component {

    constructor(props) {
        super(props);

        this.state = {
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

            },

        }
    }
    chimneyTypeCallback = async (state) => {
        await this.setState({
            chimneyTypeState: state,
        });
    }
    houseTypeCallback = async (state) => {
        await this.setState({
            houseTypeState: state,
        });
    }
    chimneyCallback = async (state) => {
        await this.setState({
            chimneyState: state,
        });
    }
    customerDataCallback = async (state) => {
        await this.setState({
            customerDataState: state,
        });
    }
    pricePageCallback = async (state) => {
        await this.setState({
            pricePageState: state,
        });
    }

    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Type Skorsten</Tab>
                        <Tab>Type Hus</Tab>
                        <Tab>Skorsten</Tab>
                        <Tab>Kundupgifter</Tab>
                        <Tab>Prisförslag</Tab>
                        <Tab>Beställing</Tab>
                    </TabList>

                    <TabPanel><ChimneyType
                                propState={this.state.chimneyTypeState}
                                parentCallback={this.chimneyTypeCallback} />
                    </TabPanel>
                    <TabPanel><HouseType
                                propState={this.state.houseTypeState}
                                parentCallback={this.houseTypeCallback} />
                    </TabPanel>
                    <TabPanel><Chimney
                                propState={this.state.chimneyState}
                                parentCallback={this.chimneyCallback} />
                    </TabPanel>
                    <TabPanel><CustomerData
                                propState={this.state.customerDataState}
                                parentCallback={this.customerDataCallback}/>
                    </TabPanel>
                    <TabPanel><PricePage
                                propState={this.state.pricePageState}
                                parentCallback={this.pricePageCallback} />
                    </TabPanel>
                    <TabPanel><OrderPage /></TabPanel>


                </Tabs>
            </div>

        );

    }
}
