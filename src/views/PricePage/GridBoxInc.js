import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';

export default class GridBoxInc extends Component {


    /**
    * component needs the following props:
    * text: String
    * closeable: Boolean
    * style: StyleSheet
    */
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number,
        }

    }

    increment = async () => {
        await this.setState({
            number: this.state.number +1,
        });
        await this.callMe();
        this.props.onChange();

    }

    decrement = async () => {
        if (this.state.number >= 1) {
            await this.setState({
                number: this.state.number - 1,
            });
            await this.callMe();
            this.props.onChange();
        }

    }

    callMe = () => {
        this.props.parentCallback(this.state.number);
    }




    render() {
        return (
            <Row style={styles.container}>
                <div onClick={this.decrement}>
                    <p>-</p>
                </div>
                <div style={{'padding-left': '10px', 'padding-right': '9px'}}>
                    <p>{this.state.number.toString()}</p>
                </div>
                <div onClick={this.increment}>
                    <p>+</p>
                </div>
            </Row>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        maxWidth: 100,
        backgroundColor: '#F9CE3C',
        'border-style': 'solid',
        borderRadius: 10,
        borderColor: '#333333',
        borderWidth: 2,
        justifyContent: 'center',
        'padding-top': '10px',
        'text-align': 'center',
        'margin-left': 'auto',
        'margin-right': 'auto',
    },
};
