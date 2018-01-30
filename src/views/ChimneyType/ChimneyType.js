import React, {Component} from 'react';
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
import {Row, Col} from 'reactstrap';
>>>>>>> 18e1dd497e67122eed1156336bc130d5fa23f387
=======
import {Row, Col} from 'reactstrap';
>>>>>>> Stashed changes

import TouchableBlock from './TouchableBlock';

export default class ChimeneyType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chimneyType: this.props.propState.chimneyType,

            choice: this.props.propState.choice,
            options: this.props.propState.options,
        }

    }

    makeChoice = (index) => {
        this.setState({choice: this.state.options[index]});
    }
    stateSetter = (i) => {
        if (i === 0) {
            this.setState({ choice: 'permeter' });
        }
        if (i === 1) {
            this.setState({ choice: 'solid vent' });
        }
        if (i === 2) {
            this.setState({ choice: 'etesjepipe' });
        }
        if (i === 3) {
            this.setState({ choice: 'rondo' });
        }
        if (i === 4) {
            this.setState({ choice: 'king fire' });
        }
    }
    touchMethod = async (i) => {
        try {
            await this.stateSetter(i);
        }
        catch(error) {
            console.log(error);
        }
        this.callback();
    }

    callback = () => {
        this.props.parentCallback(this.state);
    }

    /**
    * @return TouchableBlock[...]
    */
    listItems = () => {
        const a = this.state.chimneyType.map((topic, i) =>
        <TouchableBlock key = {i} chimneyType={topic}
            visible={this.state.visible1}
            order={i}
            touchMethod={this.touchMethod} />
        );
        return a;
    }

    render() {
        return (
            <Col md={12} style={{'padding-bottom': '50px'}}>
                <div>
                    {this.listItems()}
                </div>
            </Col>

        );

    }
}
