import React, { Component } from 'react';
import { Table } from 'reactstrap';


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
        // set rebate for all inidividual items
        let rabatt = this.state.rabatt;

        let totsum = number * price * ((100 - rabatt) / 100.0);
        await this.setState({
            sum: totsum,
        });
        this.callMe();


    }


    rebateCallback = async (state) => {
        await this.setState({
            rabatt: state,
        });
        this.calcSum();
    }

    callback = async (state) => {
        await this.setState({
            antal: state
        });
    }

    callMe = () => {
        this.props.parentCallback(this.state.sum, this.state.antal, this.state.number, this.state.rabatt);
    }




    render() {
        return (
            <tr style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>

                {/* text should come from the serial number of the chosen item*/}
                <td style={{flex: 0.18}}>
                    <GridBox
                        text={this.state.number} />
                </td>
                {/* description of item*/}
                <td style={{flex: 0.25}}>
                    <GridBox
                        text={this.state.description} />
                </td>
                {/* number should come from how many of that item were chosen*/}
                <td style={{flex: 0.13}}>
                    <GridBoxInc
                        number={this.state.antal}
                        onChange={this.calcSum}
                        parentCallback={this.callback} />
                </td>

                <td style={{flex: 0.13}}>
                    <GridBox
                        text={this.state.pris}
                        onChangeText={this.onChangeText} />
                </td>
                {/* sum should be number multiplied with the price, pretty obvious*/}
                <td style={{flex: 0.13}}>
                    <GridBox
                        text={this.state.sum} />
                </td>
                {/* rabatt should only be able to be modified by one type of user I assume*/}
                <td style={{flex: 0.13}}>
                    <GridBoxInc
                        number={this.state.rabatt}
                        parentCallback={this.rebateCallback} />
                </td>
            </tr>


        );
    }



}
