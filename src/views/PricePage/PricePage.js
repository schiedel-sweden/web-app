import React, {Component} from 'react';

import ObjectSummarizer from './ObjectSummarizer';
import {Row, Col, Table} from 'reactstrap';
import '../../styles/Border.css';

export default class PricePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pipe: this.props.propState.pipe,

            gulvPipetopp: this.props.propState.gulvPipetopp,
            heightAboveRoof: this.props.propState.heightAboveRoof,
            roofAngle: this.props.propState.roofAngle,
            totalHeight: this.props.propState.totalHeight,
            ytterelement: this.props.propState.ytterelement,
            forningsror: this.props.propState.forningsror,
            utsparningsmal: this.props.propState.utsparningsmal,
            andre: this.props.propState.andre,

            totalRabatt: this.props.propState.totalRabatt,
            frakt: this.props.propState.frakt,

            rowItems: this.props.propState.rowItems,

            tillbud: this.props.propState.tillbud,
            ordrebekreftelse: this.props.propState.ordrebekreftelse,
            visKunTotalsum: this.props.propState.visKunTotalsum,

            nettoSum: this.props.propState.nettoSum,
            moms: this.props.propState.moms,
            totalSum: this.props.propState.totalSum,

            beskjed: this.props.propState.beskjed,


        }

    }
    sendCallback = async (state) => {
        await this.setState({
            rowItems: state.rowItems
        });
        this.setTotalSum();
    }

    setTotalSum = async () => {
        let netto = 0;
        let rowItems = this.state.rowItems;
        for(let i = 0; i < this.state.rowItems.length; i++) {
            netto += rowItems[i].sum
        }
        let moms = netto / 4;
        // if moms is NaN, make it 0
        // should only be needed to be done when first browsing the page
        moms = moms ? moms : 0;

        let total = netto + moms;
        // if total is NaN, make it 0
        // should only be needed to be done when first browsing the page
        total = total ? total : 0;

        await this.setState(previousState => {
            return {
                nettoSum: netto,
                totalSum: total,
                moms: moms,
            }

        });
        this.callback();
    }

    callback = () => {
        this.props.parentCallback(this.state);
    }

    tillbud = async () => {
        await this.setState({
            tillbud: !this.state.tillbud,
        });
        this.callback();
    }
    ordrebekreftelse = async () => {
        await this.setState({
            ordrebekreftelse: !this.state.ordrebekreftelse,
        });
        this.callback();
    }
    visKunTotalsum = async () => {
        await this.setState({
            visKunTotalsum: !this.state.visKunTotalsum,
        });
        this.callback();
    }


    render() {
        return (
            <div>
                <div>
                    <h3>Din pipe</h3>
                    <p className='borderBottom'>{this.state.pipe}</p>
                </div>
                <div>
                    <h3>Angitte mått</h3>
                    <Row>
                        <Col md={5}>
                            <label className='borderBottom'>
                                Høyde gulv pipetopp
                                <input value={this.state.gulvPipetopp} placeholder={0} type="number" onChange={async (input) => {this.setState({gulvPipetopp: input.target.value});this.callback();}}  />
                                mm
                            </label>
                        </Col>
                        <Col md={{offset: 1, size: 5 }}>
                            <label className='borderBottom'>
                                Höjd över tak (H2)
                                <input value={this.state.heightAboveRoof} placeholder={0} type="number" onChange={async (input) => {this.setState({heightAboveRoof: input.target.value});this.callback();}} />
                                mm
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <label className='borderBottom'>
                                Takvinkel
                                <input value={this.state.roofAngle} placeholder={0} type="number" onChange={async (input) => {this.setState({roofAngle: input.target.value});this.callback();}} />
                                grader
                            </label>
                        </Col>
                        <Col md={{ offset: 1, size: 5 }}>
                            <label className='borderBottom'>
                                Total høyde
                                <input value={this.state.totalHeight} placeholder={0} type="number" onChange={async (input) => {this.setState({totalHeight: input.target.value});this.callback();}} />
                                mm
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <label className='borderBottom'>
                                Ytterelement
                                <input value={this.state.ytterelement} placeholder={0} type="number" onChange={async (input) => {this.setState({ytterelement: input.target.value});this.callback();}} />
                                mm
                            </label>
                        </Col>
                        <Col md={{ offset: 1, size: 5 }}>
                            <label className='borderBottom'>
                                Forningsrør
                                <input value={this.state.forningsror} placeholder={0} type="number" onChange={async (input) => {this.setState({forningsror: input.target.value});this.callback();}} />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <label className='borderBottom'>
                                Utsparningsmål
                                <input value={this.state.utsparningsmal} placeholder={0} type="number" onChange={async (input) => {this.setState({utsparningsmal: input.target.value});this.callback();}} />
                                cm
                            </label>
                        </Col>
                        <Col md={{ offset: 1, size: 5 }}>
                        </Col>
                    </Row>
                    <div className='borderBottom'>
                        <label>
                            Andre
                            <input value={this.state.andre} type="text" onChange={async (input) => {this.setState({andre: input.target.value});this.callback();}} />
                        </label>
                    </div>
                    <ObjectSummarizer
                        propState={this.state}
                        parentCallback={this.sendCallback}/>
                    <Row style={{paddingBottom: 10,}}>
                        <Col md={{size: 4}}>
                            <input value={this.state.totalRabatt} type="number" placeholder={'Rabatt på totalsumma (%)'} onChange={async (input) => {this.setState({totalRabatt: input.target.value});this.callback();}} />
                        </Col>
                        <Col md={{ offset: 1, size: 4}}>
                            <input value={this.state.frakt} type="number" placeholder={'Frakt (kr)'} onChange={async (input) => {this.setState({frakt: input.target.value});this.callback();}} />
                        </Col>
                        <Col md={1}>
                            <img style={styles.image} src={require('../../images/icons/round-arrow.png')} alt='refreshing' />
                        </Col>
                        <Col md={1}>
                            <img style={styles.image} src={require('../../images/add.png')} alt='refreshing' />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <label className='borderBottom'>
                                Netto
                                {this.state.nettoSum}
                                kr
                            </label>
                        </Col>
                        <Col md={{ offset: 1, size: 5 }}>
                            <label className='borderBottom'>
                                Moms (25%)
                                {this.state.moms}
                                kr
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <label className='borderBottom'>
                                Sum
                                {this.state.totalSum}
                                kr
                            </label>
                        </Col>
                    </Row>
                    <Row className='borderBottom'>
                        <Col md={4}>
                            <label>
                                <input type="checkbox" defaultChecked={this.state.tillbud} onChange={this.tillbud} />
                                Tillbud
                            </label>
                        </Col>
                        <Col md={4}>
                            <label>
                                <input type="checkbox" defaultChecked={this.state.ordrebekreftelse} onChange={this.ordrebekreftelse} />
                                Ordrebekreftelse
                            </label>
                        </Col>
                        <Col md={4}>
                            <label>
                                <input type="checkbox" defaultChecked={this.state.visKunTotalsum} onChange={this.visKunTotalsum} />
                                Vis kun totalsum
                            </label>
                        </Col>
                    </Row>

                    <div>
                        <label>
                            beskjed
                            <input type="text" onChange={async (input) => {this.setState({beskjed: input.target.value});this.callback();}} />
                        </label>
                    </div>

                    <Row>
                        <Col md={{size: 5}}>
                    <div>
                        <div>
                            <img style={styles.image} src={require('../../images/save.png')} alt='save order' />
                            <p> Lagre tillbud </p>
                        </div>
                        <div>
                            <p>Save as PDF</p>
                        </div>
                    </div>
                        </Col>
                        <Col md={{ offset: 1, size: 5 }}>
                    <div>
                        <div>
                            <img style={styles.image} src={require('../../images/printer.png')} alt='Print' />
                            <p> Skriv ut </p>
                        </div>
                        <div>
                            <p>Send PDF med e-post</p>
                        </div>
                    </div>
                        </Col>
                    </Row>


                </div>


            </div>

        );
    }
}

const styles = {
    image: {
        "max-width": "100%",
        "height": "auto",
        "display": "block",
        "cursor": "pointer",
        "cursor": "hand",
    }
}
