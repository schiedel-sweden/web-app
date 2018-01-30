import React, {Component} from 'react';
import {Row} from 'reactstrap';

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
            <div style={{'padding-bottom': '50px'}}>
                {/* Your pipe section*/}
                <div>
                    <h3>Din pipe</h3>
                    <p className='borderBottom'>{this.state.pipe}</p>
                </div>
                {/* End: Your pipe section*/}
                {/* Give size & price section*/}
                <div>
                    <h3>Angitte mått</h3>
                    
                    <Row>
                        <Col md={5.5}>
                            <label className='borderBottom'>
                                <label style={{'width': '190px', 'padding-right': '10px',}}>Høyde gulv pipetopp</label>
                                <div style={{'float': 'right',}}>
                                    <input value={this.state.gulvPipetopp} placeholder={0} type="number" onChange={async (input) => {this.setState({gulvPipetopp: input.target.value});this.callback();}}  />
                                    <label style={{'padding-left': '5px'}}>mm</label>
                                </div>
                            </label>
                        </Col>
                        <Col md={{offset: 1, size: 5.5 }}>
                            <label className='borderBottom'>
                                <label style={{'width': '190px', 'padding-right': '10px',}}>Höjd över tak (H2)</label>
                                <div style={{'float': 'right',}}>
                                    <input value={this.state.heightAboveRoof} placeholder={0} type="number" onChange={async (input) => {this.setState({heightAboveRoof: input.target.value});this.callback();}} />
                                    <label style={{'padding-left': '5px'}}>mm</label>
                                </div>
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5.5}>
                            <label className='borderBottom'>
                                <label style={{'width': '190px', 'padding-right': '10px',}}>Takvinkel</label>
                                <div style={{'float': 'right',}}>
                                    <input value={this.state.roofAngle} placeholder={0} type="number" onChange={async (input) => {this.setState({roofAngle: input.target.value});this.callback();}} />
                                    <label style={{'padding-left': '5px'}}>°</label>
                                </div>
                            </label>
                        </Col>
                        <Col md={{offset: 1, size: 5.5 }}>
                            <label className='borderBottom'>
                                <label style={{'width': '190px', 'padding-right': '10px',}}>Total høyde</label>
                                <div style={{'float': 'right',}}>
                                    <input value={this.state.totalHeight} placeholder={0} type="number" onChange={async (input) => {this.setState({totalHeight: input.target.value});this.callback();}} />
                                    <label style={{'padding-left': '5px'}}>m</label>
                                </div>
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5.5}>
                            <label className='borderBottom'>
                                <label style={{'width': '190px', 'padding-right': '10px',}}>Ytterelement</label>
                                <div style={{'float': 'right',}}>
                                    <input value={this.state.ytterelement} placeholder={0} type="number" onChange={async (input) => {this.setState({ytterelement: input.target.value});this.callback();}} />
                                    <label style={{'padding-left': '5px'}}>cm</label>
                                </div>
                            </label>
                        </Col>
                        <Col md={{offset: 1, size: 5.5 }}>
                            <label className='borderBottom'>
                                <label style={{'width': '190px', 'padding-right': '10px',}}>Forningsrør</label>
                                <div style={{'float': 'right',}}>
                                    <input value={this.state.forningsror} placeholder={0} type="number" onChange={async (input) => {this.setState({forningsror: input.target.value});this.callback();}} />
                                    <label style={{'padding-left': '5px'}}></label>
                                </div>
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5.5}>
                            <label className='borderBottom'>
                                <label style={{'width': '190px', 'padding-right': '10px',}}>Utsparningsmål</label>
                                <div style={{'float': 'right',}}>
                                    <input value={this.state.utsparningsmal} placeholder={0} type="number" onChange={async (input) => {this.setState({utsparningsmal: input.target.value});this.callback();}} />
                                    <label style={{'padding-left': '5px'}}>cm</label>
                                </div>
                            </label>
                        </Col>
                        <Col md={{ offset: 1, size: 5.5 }}>
                        </Col>
                    </Row>
                    <Row className='borderBottom'>
                        <Col md={2}>
                            <label style={{'padding-right': '10px',}}>Andre</label>
                        </Col>
                        <Col md={10}>
                            <textarea style={{'width': '100%', 'float': 'right', 'height': '30px', 'resize': 'none'}}
                                      value={this.state.andre}
                                      type="text"
                                      onChange={async (input) => {this.setState({andre: input.target.value});this.callback();}}>
                            </textarea>
                        </Col>
                    </Row>

                    <ObjectSummarizer
                        propState={this.state}
                        parentCallback={this.sendCallback}/>

                    <Row style={{paddingBottom: 10,}}>
                        <Col md={{size: 4}}>
                            <input style={{'width': '100%',}} value={this.state.totalRabatt} type="number" placeholder={'Rabatt på totalsumma (%)'} onChange={async (input) => {this.setState({totalRabatt: input.target.value});this.callback();}} />
                        </Col>
                        <Col md={{ offset: 1, size: 4}}>
                            <input style={{'width': '100%',}} value={this.state.frakt} type="number" placeholder={'Frakt (kr)'} onChange={async (input) => {this.setState({frakt: input.target.value});this.callback();}} />
                        </Col>
                        <Col md={{offset: 1, size: 1}}>
                            <div style={styles.discountButton}>
                                <img style={styles.icons} src={require('../../images/icons/round-arrow.png')} alt='refreshing' />
                            </div>
                        </Col>
                        <Col md={1}>
                            <div style={styles.discountButton}>
                                <img style={styles.icons} src={require('../../images/add.png')} alt='refreshing' />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={5.5}>
                            <label className='borderBottom'>
                                <label style={{'width': '190px', 'padding-right': '10px',}}>NETTO</label>
                                <div style={{'float': 'right',}}>
                                    <label style={{'padding-right': '5px'}}> {this.state.nettoSum} </label>
                                    <label style={{'padding-left': '5px'}}>kr</label>
                                </div>
                            </label>
                        </Col>
                        <Col md={{offset: 1, size: 5.5 }}>
                            <label className='borderBottom'>
                                <label style={{'width': '190px', 'padding-right': '10px',}}>MOMS (25%)</label>
                                <div style={{'float': 'right',}}>
                                    <label style={{'padding-right': '5px'}}> {this.state.moms} </label>
                                    <label style={{'padding-left': '5px'}}>kr</label>
                                </div>
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5.5}>
                            <label className='borderBottom'>
                                <label style={{'width': '190px', 'padding-right': '10px',}}>SUM</label>
                                <div style={{'float': 'right',}}>
                                    <label style={{'padding-right': '5px'}}> {this.state.totalSum} </label>
                                    <label style={{'padding-left': '5px'}}>kr</label>
                                </div>
                            </label>
                        </Col>
                        <Col md={{offset: 1, size: 5.5 }}>
                        </Col>
                    </Row>


                    <Row className='borderBottom'>
                        <Col md={4}>
                            <label>
                                <input type="checkbox" defaultChecked={this.state.tillbud} style={styles.checkbox} onChange={this.tillbud} />
                                Tillbud
                            </label>
                        </Col>
                        <Col md={4}>
                            <label>
                                <input type="checkbox" defaultChecked={this.state.ordrebekreftelse} style={styles.checkbox} onChange={this.ordrebekreftelse} />
                                Ordrebekreftelse
                            </label>
                        </Col>
                        <Col md={4}>
                            <label>
                                <input type="checkbox" defaultChecked={this.state.visKunTotalsum} style={styles.checkbox} onChange={this.visKunTotalsum} />
                                Vis kun totalsum
                            </label>
                        </Col>
                    </Row>

                    <Row className='borderBottom'>
                        <Col md={2}>
                            <label style={{'padding-right': '10px',}}>BESKJED</label>
                        </Col>
                        <Col md={10}>
                            <textarea style={{'width': '100%', 'float': 'right', 'height': '30px', 'resize': 'none'}}
                                      value={this.state.andre}
                                      type="text"
                                      onChange={async (input) => {this.setState({beskjed: input.target.value});this.callback();}}>
                            </textarea>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{size: 5.5}}>
                            <div>
                                <div style={styles.receiptButton}>
                                    <img style={styles.image} src={require('../../images/save.png')} alt='save order' />
                                    <p style={{fontSize: 24, 'text-align': 'center',}}> Lagre tillbud </p>
                                </div>
                                <div style={styles.receiptButton}>
                                    <p style={{fontSize: 24, 'text-align': 'center',}}>Save as PDF</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={{ offset: 1, size: 5.5 }}>
                            <div>
                                <div style={styles.receiptButton}>
                                    <img style={styles.image} src={require('../../images/printer.png')} alt='Print' />
                                    <p style={{fontSize: 24, 'text-align': 'center',}}> Skriv ut </p>
                                </div>
                                <div style={styles.receiptButton}>
                                    <p style={{fontSize: 24, 'text-align': 'center',}}>Send PDF med e-post</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/*End: Give size & price section*/}
                </div>

            </div>

        );
    }
}

const styles = {
    image: {
        'max-width': '30%',
        'height': 'auto',
        'display': 'block',
        'cursor': 'pointer',
        'cursor': 'hand',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'padding-bottom': '1%',
    },
    icons: {
        height: 21,
        width: 21,
        'margin-left': '5px',
        'margin-top': '5px',
    },
    discountButton: {
        'border-style': 'solid',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#F9CE3C',
        height: 35,
        width: 35,
    },
    receiptButton: {
        'max-width': '100%',
        'height': 'auto',
        'padding-top': '6%',
        backgroundColor: '#F9CE3C',
        'border-style': 'solid',
        borderRadius: 10,
        borderColor: '#333333',
        borderWidth: 4,
        'margin-top': '15px',
    },
    checkbox: {
        'margin-right': '5px',
    },
}
