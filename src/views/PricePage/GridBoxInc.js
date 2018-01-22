import React, { Component } from 'react';

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
            <div style={styles.container}>

                <div onClick={this.decrement}>
                    <p>-</p>
                </div>
                <div style={{paddingHorizontal: 4}}>
                    <p>{this.state.number.toString()}</p>
                </div>
                <div onClick={this.increment}>
                    <p>+</p>
                </div>

            </div>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        maxWidth: 90,
        backgroundColor: '#F9CE3C',
        borderRadius: 10,
        borderColor: '#333333',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
};
