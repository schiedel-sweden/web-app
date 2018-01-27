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
                    <div style={{'margin-left': 'auto', 'margin-right': 'auto',}}><img style={styles.houseImage} src={require('../../images/hus-skiss.png')} alt='house sketch'/></div>
                </Row>
                <Row style={{'padding-top': '20px'}}>
                    <Col md={5.5}>
                        <label className='borderBottom'>
                            <label style={{'width': '180px', 'padding-right': '10px',}}>antal piper:</label>
                            <div style={{'float': 'right',}}>
                                <input value={this.state.antalPiper} placeholder={0} type="number" onChange={async (input) => {await this.setState({antalPiper: input.target.value}); this.callback();}}  />
                            </div>
                        </label>
                    </Col>
                    <Col md={{offset: 1, size: 5.5 }}>
                        <label className='borderBottom'>
                            <label style={{'width': '180px', 'padding-right': '10px',}}>Höjd över tak (H2)</label>
                            <div style={{'float': 'right',}}>
                                <input value={this.state.heightAboveRoof} placeholder={0} type="number" onChange={async (input) => {await this.setState({heightAboveRoof: input.target.value}); this.callback()}} />
                                <label style={{'padding-left': '5px'}}>mm</label>
                            </div>
                        </label>
                    </Col>
                </Row>
                <Row style={{'padding-top': '20px'}}>
                    <Col md={5.5}>
                        <label className='borderBottom'>
                            <label style={{'width': '180px', 'padding-right': '10px',}}>Total Höjd (H1)</label>
                            <div style={{'float': 'right',}}>
                                <input value={this.state.totalHeight} placeholder={0} type="number" onChange={async (input) => {await this.setState({totalHeight: input.target.value}); this.callback()}} />
                                <label style={{'padding-left': '5px'}}>mm</label>
                            </div>
                        </label>
                    </Col>
                    <Col md={{offset: 1, size: 5.5 }}>
                        <label className='borderBottom'>
                            <label style={{'width': '180px', 'padding-right': '10px',}}>Takvinkel (V)</label>
                            <div style={{'float': 'right',}}>
                                <input value={this.state.roofAngle} placeholder={0} type="number" onChange={async (input) => {await this.setState({roofAngle: input.target.value}); this.callback()}} />
                                <label style={{'padding-left': '5px'}}>°</label>
                            </div>
                        </label>
                    </Col>
                </Row>

                <Row style={{'padding-top': '20px'}}>
                    <h2>Beräkna total höjd (H1) och höjd över taket (h2)</h2>
                </Row>

                <Row style={{'padding-top': '20px'}}>
                    <Col md={5.5}>
                        <label className='borderBottom'>
                            <label style={{'width': '180px', 'padding-right': '10px',}}>Höjd till mone (A4)</label>
                            <div style={{'float': 'right',}}>
                                <input value={this.state.tillMone} placeholder={0} type="number" onChange={async (input) => {await this.setState({tillMone: input.target.value}); this.callback()}} />
                                <label style={{'padding-left': '5px'}}>mm</label>
                            </div>
                        </label>
                    </Col>
                    <Col md={{offset: 1, size: 5.5 }}>
                        <label className='borderBottom'>
                            <label style={{'width': '180px', 'padding-right': '10px',}}>Avstånd från mone</label>
                            <div style={{'float': 'right',}}>
                                <input value={this.state.franMone} placeholder={0} type="number" onChange={async (input) => { await this.setState({franMone: input.target.value}); this.callback()}} />
                                <label style={{'padding-left': '5px'}}>mm</label>
                            </div>
                        </label>
                    </Col>
                </Row>

                <Row style={{'padding-top': '20px'}}>
                    <Col md={5.5}>
                        <label style={{'width': '100%'}}>
                            <button
                                style={styles.submitButton}
                                onClick={this.values} >
                                Beräkna
                            </button>
                            <label style={{fontSize: 20, 'padding-right': '50px','padding-left': '50px'}}>
                                =
                            </label>
                            <label className='borderBottom'>
                                <label >*some value* {this.state.calcValue}</label>
                                <label style={{'padding-left': '5px'}}>mm</label>
                            </label>
                        </label>
                    </Col>
                    <Col md={{offset: 1, size: 5.5 }}>
                    </Col>
                </Row>

            </Col>
        );

    }
}

let styles = {
    houseImage: {
        width: 400,
        height: 300,
    },
    submitButton: {
        'width': 'auto',
        'height': 'auto',
        backgroundColor: '#F9CE3C',
        'border-style': 'solid',
        borderRadius: 6,
        borderColor: '#333333',
        borderWidth: 2,
    },
}
