import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ChimneyType from '../ChimneyType/ChimneyType';
import HouseType from '../HouseType/HouseType';
import Chimney from '../Chimney/Chimney';
import CustomerData from '../CustomerData/CustomerData';
import PricePage from '../PricePage/PricePage';
import OrderPage from '../Order/OrderPage';

export default class Tillbud extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Type Skorsten</Tab>
                        <Tab>Type Hus</Tab>
                        <Tab>Skorsten</Tab>
                        <Tab>Kundedata</Tab>
                        <Tab>Tillbud</Tab>
                        <Tab>Bestilling</Tab>
                    </TabList>

                    <TabPanel><ChimneyType /></TabPanel>
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
