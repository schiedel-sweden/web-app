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
                test: 'text',

            },
            ChimneyState: {

            },
            customerDataState: {

            },
            pricePageState: {

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
                    <TabPanel><HouseType /></TabPanel>
                    <TabPanel><Chimney /></TabPanel>
                    <TabPanel><CustomerData /></TabPanel>
                    <TabPanel><PricePage /></TabPanel>
                    <TabPanel><OrderPage /></TabPanel>


                </Tabs>
            </div>

        );

    }
}
