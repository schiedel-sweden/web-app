import React, {Component} from 'react';
// https://github.com/Hacker0x01/react-datepicker
// only works on the latest browsers
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'

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
            startDate: this.props.propState.startDate,


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

    // method that is run when changing date
    handleChangeDate = async (date) => {
        await this.setState({
            startDate: date,
        });
        this.callback();
    }

    // runs the callback from the parent (Prisforslag.js)
    callback = () => {
        this.props.parentCallback(this.state);
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
                    {moment().format('ll')}
                </div>

                <div>
                    <label>
                        Ønsket leveringsdato:
                    </label>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChangeDate}
                        minDate={moment()}
                        maxDate={moment().add(21, "days")} />
                </div>

                <div>
                    <label>
                        beskjed
                        <input type="text" value={this.state.beskjed} onChange={async (input) => {await this.setState({beskjed: input.target.value});this.callback();}} />
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
