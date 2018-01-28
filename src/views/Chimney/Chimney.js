import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import '../../styles/Border.css';

export default class Chimney extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alternative1: this.props.propState.alternative1,
            alternative2: this.props.propState.alternative2,

            pusset: this.props.propState.pusset,
            beslag: this.props.propState.beslag,
            feieluke: this.props.propState.feieluke,
            flexiroll: this.props.propState.flexiroll,
            wakaflex: this.props.propState.wakaflex,
            topavdekning: this.props.propState.topavdekning,
            feieplatform: this.props.propState.feieplatform,
            tegelforblendet: this.props.propState.tegelforblendet,
            tetting: this.props.propState.tetting,

            wireset: this.props.propState.wireset,
            lokk: this.props.propState.lokk,

            roykinnforingLiten: this.props.propState.roykinnforingLiten,
            roykinnforingStor: this.props.propState.roykinnforingStor,

        }

    }

    alt1 = async () => {
        await this.setState({
            alternative1: !this.state.alternative1
        });
        this.callback();
    }
    alt2 = async () => {
        await this.setState({
            alternative2: !this.state.alternative2
        });
        this.callback();
    }

    pusset = async () => {
        await this.setState({
            pusset: !this.state.pusset,
        });
        this.callback();
    }
    topavdekning = async () => {
        await this.setState({
            topavdekning: !this.state.topavdekning,
        });
        this.callback();
    }

    beslag = async () => {
        this.setState({
            beslag: !this.state.beslag,
        });
        this.callback();
    }

    topavdekning = async () => {
        this.setState({
            topavdekning: !this.state.topavdekning,
        });
        this.callback();
    }

    feieluke = async () => {
        this.setState({
            feieluke: !this.state.feieluke,
        });
        this.callback();
    }

    tegelforblendet = async () => {
        this.setState({
            tegelforblendet: !this.state.tegelforblendet,
        });
        this.callback();
    }

    flexiroll = async () => {
        this.setState({
            flexiroll: !this.state.flexiroll,
        });
        this.callback();
    }

    tetting = async () => {
        this.setState({
            tetting: !this.state.tetting,
        });
        this.callback();
    }

    wakaflex = async () => {
        this.setState({
            wakaflex: !this.state.wakaflex,
        });
        this.callback();
    }

    wireset = async () => {
        this.setState({
            wireset: !this.state.wireset,
        });
        this.callback();
    }

    lokk = async () => {
        this.setState({
            lokk: !this.state.lokk,
        });
        this.callback();
    }

    callback = () => {
        this.props.parentCallback(this.state);
    }


    render() {

        return (
            <div style={{'padding-bottom': '50px'}}>
                <div>

                    <h2>Typ av skorsten</h2>
                    <div className='borderBottom' style={{'padding-top': '20px'}}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.alternative1} style={styles.checkbox} onChange={this.alt1} />
                            Alternative 1
                        </label>
                    </div>

                    <div className='borderBottom' style={{'padding-top': '20px'}}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.alternative2} style={styles.checkbox} onChange={this.alt2} />
                            Alternative 2
                        </label>
                    </div>
                </div>

                <h2>Över tak</h2>

                <Row className='borderBottom' style={{'padding-top': '20px'}}>
                    <Col md={5.5}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.pusset} style={styles.checkbox} onChange={this.pusset} />
                            Pusset pipe
                        </label>
                    </Col>
                    <Col md={{ offset:1, size: 5.5}}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.topavdekning} style={styles.checkbox} onChange={this.topavdekning} />
                            Topavdekninge
                        </label>
                    </Col>
                </Row>

                <Row className='borderBottom' style={{'padding-top': '20px'}}>
                    <Col md={5.5}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.beslag} style={styles.checkbox} onChange={this.beslag} />
                            Komplett firkantet beslag
                        </label>
                    </Col>
                    <Col md={{ offset:1, size: 5.5}}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.feieplatform} style={styles.checkbox} onChange={this.feieplatform} />
                            Feieplatform (Kun for takstein)
                        </label>
                    </Col>
                </Row>

                <Row className='borderBottom' style={{'padding-top': '20px'}}>
                    <Col md={5.5}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.feieluke} style={styles.checkbox} onChange={this.feieluke} />
                            Feieluke over tak
                        </label>
                    </Col>
                    <Col md={{ offset:1, size: 5.5}}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.tegelforblendet} style={styles.checkbox} onChange={this.tegelforblendet} />
                            Tegelforblendet pipe
                        </label>
                    </Col>
                </Row>

                <Row className='borderBottom' style={{'padding-top': '20px'}}>
                    <Col md={5.5}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.flexiroll} style={styles.checkbox} onChange={this.flexiroll} />
                            Flexiroll for tetting mot damsperre
                        </label>
                    </Col>
                    <Col md={{ offset:1, size: 5.5}}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.tetting} style={styles.checkbox} onChange={this.tetting} />
                            Tetting mot undertak
                        </label>
                    </Col>
                </Row>

                <div className='borderBottom' style={{'padding-top': '20px'}}>
                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.wakaflex} style={styles.checkbox} onChange={this.wakaflex} />
                            Wakaflex - Benyttes som ekstra tetting rundt beslag i spesielt i vaerutsatte områder
                        </label>
                    </div>
                </div>

                <h2>Tillval</h2>
                <Row className='borderBottom' style={{'padding-top': '20px'}}>
                    <Col md={5.5}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.wireset} style={styles.checkbox} onChange={this.wireset} />
                            Wireset for heising/montering
                        </label>
                    </Col>
                    <Col md={{ offset:1, size: 5.5}}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.lokk} style={styles.checkbox} onChange={this.lokk} />
                            Lokk til tilluftsaddapter
                        </label>
                    </Col>
                </Row>

                <Row>
                    <Col md={5.5}>
                        <label className='borderBottom'>
                            <label style={{'width': '190px', 'padding-right': '10px',}}>Roykinnforing 125-160</label>
                            <div style={{'float': 'right',}}>
                                <input type="number" placeholder={0} value={this.state.roykinnforingLiten} onChange={(input) => this.setState({roykinnforingLiten: input.target.value})} />
                                <label style={{'padding-left': '5px'}}>mm</label>
                            </div>
                        </label>
                    </Col>
                    <Col md={{offset: 1, size: 5.5 }}>
                        <label className='borderBottom'>
                            <label style={{'width': '190px', 'padding-right': '10px',}}>Roykinnforing 150-160</label>
                            <div style={{'float': 'right',}}>
                                <input type="number" placeholder={0} value={this.state.roykinnforingStor} onChange={(input) => this.setState({roykinnforingStor: input.target.value})} />
                                <label style={{'padding-left': '5px'}}>mm</label>
                            </div>
                        </label>
                    </Col>
                </Row>

            </div>

        );

    }
}

let styles = {
    checkbox: {
        'margin-right': '5px',
    },
}
