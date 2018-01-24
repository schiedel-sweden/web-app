import React, {Component} from 'react';
import {Row, Col, Table} from 'reactstrap';
import ObjectSummarizer from '../PricePage/ObjectSummarizer';

export default class OrderPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rowItems: this.props.propState.rowItems,
            kranbil: this.props.propState.kranbil,
            plukket: this.props.propState.plukket,
            kjorer: this.props.propState.kjorer,

            beskjed: this.props.propState.beskjed,


        }
    }

    kranbil = async () => {
        await this.setState({
            kranbil: !this.state.kranbil,
        });
        this.callback();
    }
    plukket = async () => {
        await this.setState({
            plukket: !this.state.plukket,
        });
        this.callback();
    }
    kjorer = async () => {
        await this.setState({
            kjorer: !this.state.kjorer,
        });
        this.callback();
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

    render() {
        return (
            <div>
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
                            <input type="checkbox" defaultChecked={this.state.kranbil} onChange={this.kranbil} />
                            Leveres med kranbil
                        </label>
                    </Col>
                    <Col md={4}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.plukket} onChange={this.plukket} />
                            Plukket
                        </label>
                    </Col>
                    <Col md={4}>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.kjorer} onChange={this.kjorer} />
                            Kjører
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <label className='borderBottom'>
                            DATO:
                        </label>
                    </Col>
                    <Col md={{ offset: 1, size: 5 }}>
                        <label className='borderBottom'>
                            Ønsket leveringsdato:
                        </label>
                    </Col>
                </Row>
                <div>
                    <label>
                        beskjed
                        <input type="text" onChange={async (input) => {await this.setState({beskjed: input.target.value});this.callback();}} />
                    </label>
                </div>

                <Row>
                    <Col md={{size: 5}}>
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
                    <Col md={{ offset: 2, size: 5 }}>
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
}
