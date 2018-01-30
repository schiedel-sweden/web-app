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
            chimneyTypeState: this.props.propState.chimneyTypeState,
            houseTypeState: this.props.propState.houseTypeState,

            chimneyState: this.props.propState.chimneyState,
            customerDataState: this.props.propState.customerDataState,
            pricePageState: this.props.propState.pricePageState,
            orderPageState: this.props.propState.orderPageState,

        }
    }
    chimneyTypeCallback = async (state) => {
        await this.setState({
            chimneyTypeState: state,
        });
        await this.setState({
            pricePageState: {
                pipe: state.choice,
            },
        });
        this.callback();
    }
    houseTypeCallback = async (state) => {
        await this.setState({
            houseTypeState: state,
        });
        this.callback();
    }
    chimneyCallback = async (state) => {
        await this.setState({
            chimneyState: state,
        });
        this.callback();
    }
    customerDataCallback = async (state) => {
        await this.setState({
            customerDataState: state,
        });
        this.callback();
    }
    pricePageCallback = async (state) => {
        await this.setState({
            pricePageState: state,
        });
        await this.setState({orderPageState: Object.assign({}, this.state.orderPageState, { rowItems: state.rowItems})});

        this.callback();
    }
    orderPageCallback = async (state) => {
        await this.setState({
            orderPageState: state,
        });
        await this.setState({pricePageState: Object.assign({}, this.state.pricePageState, { rowItems: state.rowItems})});

        this.callback();
    }
    callback = () => {
        this.props.parentCallback(this.state);
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
                    <TabPanel><OrderPage
                                propState={this.state.orderPageState}
                                parentCallback={this.orderPageCallback} />
                    </TabPanel>


                </Tabs>
            </div>

        );

    }
}
