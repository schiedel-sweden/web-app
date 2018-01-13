import React, {Component} from 'react';

import ObjectSummarizer from './ObjectSummarizer';


export default class PricePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pipe: 'pipe selection',

            gulvPipetopp: '',
            heightAboveRoof: '',
            roofAngle: '',
            totalHeight: '',
            ytterelement: '',
            forningsror: '',
            utsparningsmal: '',
            andre: '',

            totalRabatt: 0,
            frakt: 0,

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

            tillbud: false,
            ordrebekreftelse: false,
            visKunTotalsum: false,

            nettoSum: 0,
            moms: 0,
            totalSum: 0,

            beskjed: '',


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
        //this.parentCallback();
    }

    parentCallback = () => {

    }

    tillbud = () => {
        this.setState({
            tillbud: !this.state.tillbud,
        });
    }
    ordrebekreftelse = () => {
        this.setState({
            ordrebekreftelse: !this.state.ordrebekreftelse,
        });
    }
    visKunTotalsum = () => {
        this.setState({
            visKunTotalsum: !this.state.visKunTotalsum,
        })
    }


    render() {
        return (
            <div>
                <div>
                    <h3>Din pipe</h3>
                    <p>{this.state.pipe}</p>
                </div>
                <div>
                    <h3>Angitte mått</h3>
                    <div>
                        <p>Høyde gulv pipetopp</p>
                        <input value={this.state.gulvPipetopp} placeholder={0} type="numeber" onChange={(input) => this.setState({gulvPipetopp: input.target.value})}  />
                        <p>mm</p>
                    </div>

                    <div>
                        <p>Höjd över tak (H2)</p>
                        <input value={this.state.heightAboveRoof} placeholder={0} type="number" onChange={(input) => this.setState({heightAboveRoof: input.target.value})} />
                        <p>mm</p>
                    </div>

                    <div>
                        <p>Takvinkel</p>
                        <input value={this.state.roofAngle} placeholder={0} type="number" onChange={(input) => this.setState({roofAngle: input.target.value})} />
                        <p>grader</p>
                    </div>

                    <div>
                        <p>Total høyde</p>
                        <input value={this.state.totalHeight} placeholder={0} type="number" onChange={(input) => this.setState({totalHeight: input.target.value})} />
                        <p>mm</p>
                    </div>

                    <div>
                        <p>Ytterelement</p>
                        <input value={this.state.ytterelement} placeholder={0} type="number" onChange={(input) => this.setState({ytterelement: input.target.value})} />
                        <p>mm</p>
                    </div>

                    <div>
                        <p>Forningsrør</p>
                        <input value={this.state.forningsror} placeholder={0} type="number" onChange={(input) => this.setState({forningsror: input.target.value})} />
                        <p></p>
                    </div>

                    <div>
                        <p>Utsparningsmål</p>
                        <input value={this.state.utsparningsmal} placeholder={0} type="number" onChange={(input) => this.setState({utsparningsmal: input.target.value})} />
                    </div>

                    <div>
                        <p>Andre</p>
                        <input value={this.state.andre} type="text" onChange={(input) => this.setState({andre: input.target.value})} />
                    </div>

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
                        <input value={this.state.totalRabatt} type="number" placeholder={'Rabatt på totalsumma (%)'} onChange={(input) => this.setState({totalRabatt: input.target.value})} />
                        <input value={this.state.frakt} type="number" placeholder={'Frakt (kr)'} onChange={(input) => this.setState({frakt: input.target.value})} />
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
                        <label>
                            <input type="checkbox" defaultChecked={this.state.tillbud} onChange={this.tillbud} />
                            Tillbud
                        </label>

                        <label>
                            <input type="checkbox" defaultChecked={this.state.ordrebekreftelse} onChange={this.ordrebekreftelse} />
                            Ordrebekreftelse
                        </label>

                        <label>
                            <input type="checkbox" defaultChecked={this.state.visKunTotalsum} onChange={this.visKunTotalsum} />
                            Vis kun totalsum
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


            </div>

        );

    }
}
