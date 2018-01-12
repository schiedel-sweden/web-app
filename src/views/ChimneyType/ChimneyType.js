import React, {Component} from 'react';

import TouchableBlock from './TouchableBlock';

export default class ChimeneyType extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        //this.callback();
    }


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
            <div>
                <h1>ChimneyType</h1>

                <div>
                    {this.listItems()}

                    <div>
                        <p>SKORSTENSTYP</p>
                        <p onChange={(text) => this.setState({choice: text})}>{this.state.choice}</p>
                    </div>
                </div>
            </div>

        );

    }
}
