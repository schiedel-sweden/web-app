import React, {Component} from 'react';
import {Col, Row } from 'reactstrap';

export default class HouseType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            antalPiper: this.props.propState.antalPiper,
            totalHeight: this.props.propState.totalHeight,
            heightAboveRoof: this.props.propState.heightAboveRoof,
            roofAngle: this.props.propState.roofAngle,

            tillMone: this.props.propState.tillMone,
            franMone: this.props.propState.franMone,

            calcValue: this.props.propState.calcValue,
        }
    }

    callback = () => {
        this.props.parentCallback(this.state);
    }

    values = () => {
        alert(this.state.antalPiper);
    }

    render() {
        return (
            <Col md={12}>
                <Row>
                    <div ><img style={styles.houseImage} src={require('../../images/hus-skiss.png')} alt='house sketch'/></div>
                </Row>

                <Row>
                    <Col md={6}>
                        <label>
                            antal piper:
                            <input value={this.state.antalPiper} placeholder={0} type="number" onChange={async (input) => {await this.setState({antalPiper: input.target.value}); this.callback();}}  />
                        </label>
                    </Col>
                    <Col md={6}>
                        <label>
                            Höjd över tak (H2)
                            <input value={this.state.heightAboveRoof} placeholder={0} type="number" onChange={async (input) => {await this.setState({heightAboveRoof: input.target.value}); this.callback()}} />
                            mm
                        </label>
                    </Col>

                </Row>

                <Row>
                    <Col md={6}>
                        <label>
                            Total Höjd (H1)
                            <input value={this.state.totalHeight} placeholder={0} type="number" onChange={async (input) => {await this.setState({totalHeight: input.target.value}); this.callback()}} />
                            mm
                        </label>
                    </Col>
                    <Col md={6}>
                        <label>
                            Takvinkel (V)
                            <input value={this.state.roofAngle} placeholder={0} type="number" onChange={async (input) => {await this.setState({roofAngle: input.target.value}); this.callback()}} />
                            grader
                        </label>
                    </Col>

                </Row>

                <Row>
                    <h2>Beräkna total höjd (H1) och höjd över taket (h2)</h2>
                </Row>

                <Row>
                    <Col md={6}>
                        <label>
                            Höjd till mone (A4)
                            <input value={this.state.tillMone} placeholder={0} type="number" onChange={async (input) => {await this.setState({tillMone: input.target.value}); this.callback()}} />
                            mm
                        </label>
                    </Col>

                    <Col md={6}>
                        <label>
                            Avstånd från mone
                            <input value={this.state.franMone} placeholder={0} type="number" onChange={async (input) => { await this.setState({franMone: input.target.value}); this.callback()}} />
                            mm
                        </label>
                    </Col>
                </Row>

                <Row>
                    <label>
                        <button onClick={this.values} >Beräkna</button> {/* does nothing so far */}
                        *some value*
                        {this.state.calcValue} mm
                    </label>
                </Row>

            </Col>
        );

    }
}

let styles = {
    houseImage: {
        width: 400,
        height: 300,
    }
}
