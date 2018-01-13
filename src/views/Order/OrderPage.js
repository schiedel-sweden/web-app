import React, {Component} from 'react';

import ObjectSummarizer from '../PricePage/ObjectSummarizer';

export default class OrderPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rowItems: [
                    {
                        number: 123,
                        antal: 0,
                        pris: 3000,
                        sum: 0,
                    },
                    {
                        number: 231,
                        antal: 0,
                        pris: 1500,
                        sum: 0,
                    },
                    {
                        number: 312,
                        antal: 0,
                        pris: 2000,
                        sum: 0,
                    },
                ],
            kranbil: false,
            plukket: false,
            kjorer: false,

            beskjed: '',


        }
    }

    kranbil = () => {
        this.setState({
            kranbil: !this.state.kranbil,
        });
    }
    plukket = () => {
        this.setState({
            plukket: !this.state.plukket,
        });
    }
    kjorer = () => {
        this.setState({
            kjorer: !this.state.kjorer,
        });
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
        //this.parentCallback();
    }

    parentCallback = () => {

    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h3>NOBBNUMMBER</h3>
                    </div>
                    <div>
                        <h3>BESKRIVELSE</h3>
                    </div>
                    <div>
                        <h3>ANTALL</h3>
                    </div>
                    <div>
                        <h3>PRIS</h3>
                    </div>
                    <div>
                        <h3>SUM</h3>
                    </div>
                    <div>
                        <h3>RABATT (%)</h3>
                    </div>
                </div>

                <div>
                    <ObjectSummarizer
                        propState={this.state}
                        parentCallback={this.sendCallback}/>

                </div>

                <div>
                    <div>
                        <p>Netto</p>
                        <p>{this.state.nettoSum}</p>
                        <p>kr</p>
                    </div>

                    <div>
                        <p>Moms (25%)</p>
                        <p>{this.state.moms}</p>
                        <p>kr</p>
                    </div>

                    <div>
                        <p>Sum</p>
                        <p>{this.state.totalSum}</p>
                        <p>kr</p>
                    </div>

                </div>

                <div>
                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.kranbil} onChange={this.kranbil} />
                            Leveres med kranbil
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.plukket} onChange={this.plukket} />
                            Plukket
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.kjorer} onChange={this.kjorer} />
                            Kjører
                        </label>
                    </div>

                </div>


                <div>
                    <label>
                        DATO:
                    </label>
                </div>

                <div>
                    <label>
                        Ønsket leveringsdato:
                    </label>
                </div>

                <div>
                    <label>
                        beskjed
                        <input type="text" onChange={(input) => this.setState({beskjed: input.target.value})} />
                    </label>
                </div>

                <div>
                    <div>
                        <img src={require('../../images/save.png')} alt='save order' />
                        <p> Lagre tillbud </p>
                    </div>
                    <div>
                        <p>Save as PDF</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={require('../../images/printer.png')} alt='Print' />
                        <p> Skriv ut </p>
                    </div>
                    <div>
                        <p>Send PDF med e-post</p>
                    </div>
                </div>


            </div>

        );

    }
}
