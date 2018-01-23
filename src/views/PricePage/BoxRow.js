import React, { Component } from 'react';
import {Row} from 'reactstrap';

import GridBoxInc from './GridBoxInc';
import GridBox from './GridBox';


export default class BoxRow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: this.props.number,
            description: this.props.description,
            antal: this.props.antal,
            pris: this.props.pris,
            sum: this.props.sum,
            rabatt: this.props.rabatt,
        }
        this.calcSum = this.calcSum.bind(this);

    }

    componentWillMount = () => {
        this.callMe();

    }

    componentWillReceiveProps = async (newprops) => {
        await this.setState({
            number: newprops.number,
            description: newprops.description,
            antal: newprops.antal,
            pris: newprops.pris,
            sum: newprops.sum,
            rabatt: newprops.rabatt,
        });
    }

    async calcSum() {
        let number = this.state.antal;
        let price = this.state.pris;

        let totsum = number * price;
        await this.setState({
            sum: totsum,
        });
        this.callMe();


    }


    callback = async (state) => {
        await this.setState({
            antal: state
        });
    }

    callMe = () => {
        this.props.parentCallback(this.state.sum, this.state.antal, this.state.number);
    }




    render() {
        return (
            <Row>
                {/* text should come from the serial number of the chosen item*/}
                <div style={{flex: 0.18}}>
                    <GridBox
                        text={this.state.number} />
                </div>
                {/* description of item*/}
                <div style={{flex: 0.25}}>
                    <GridBox
                        text={this.state.description} />
                </div>
                {/* number should come from how many of that item were chosen*/}
                <div style={{flex: 0.13}}>
                    <GridBoxInc
                        number={this.state.antal}
                        onChange={this.calcSum}
                        parentCallback={this.callback} />
                </div>
                {/* price should come from somewhere, no idea*/}
                <div style={{flex: 0.13}}>
                    <GridBox
                        text={this.state.pris}
                        onChangeText={this.onChangeText} />
                </div>
                {/* sum should be number multiplied with the price, pretty obvious*/}
                <div style={{flex: 0.13}}>
                    <GridBox
                        text={this.state.sum} />
                </div>
                {/* rabatt should only be able to be modified by one type of user I assume*/}
                <div style={{flex: 0.13}}>
                    <GridBoxInc
                        number={this.state.rabatt} />
                </div>
            </Row>

        );
    }



}
