import React, {Component} from 'react';

export default class Chimney extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alternative1: false,
            alternative2: true,

            pusset: false,
            beslag: false,
            feieluke: false,
            flexiroll: false,
            wakaflex: false,
            topavdekning: false,
            feieplatform: false,
            tegelforblendet: false,
            tetting: false,

            wireset: false,
            lokk: false,

            roykinnforingLiten: null,
            roykinnforingStor: null,

        }

    }

    alt1 = () => {
        this.setState({
            alternative1: !this.state.alternative1
        });
    }
    alt2 = () => {
        this.setState({
            alternative2: !this.state.alternative2
        });
    }

    pusset = () => {
        this.setState({
            pusset: !this.state.pusset,
        });
    }
    topavdekning = () => {
        this.setState({
            topavdekning: !this.state.topavdekning,
        });
    }

    beslag = () => {
        this.setState({
            beslag: !this.state.beslag,
        });
    }

    topavdekning = () => {
        this.setState({
            topavdekning: !this.state.topavdekning,
        });
    }

    feieluke = () => {
        this.setState({
            feieluke: !this.state.feieluke,
        });
    }

    tegelforblendet = () => {
        this.setState({
            tegelforblendet: !this.state.tegelforblendet,
        });
    }

    flexiroll = () => {
        this.setState({
            flexiroll: !this.state.flexiroll,
        });
    }

    tetting = () => {
        this.setState({
            tetting: !this.state.tetting,
        });
    }

    wakaflex = () => {
        this.setState({
            wakaflex: !this.state.wakaflex,
        });
    }

    wireset = () => {
        this.setState({
            wireset: !this.state.wireset,
        });
    }

    lokk = () => {
        this.setState({
            lokk: !this.state.lokk,
        });
    }


    render() {

        return (
            <div>
                <div>

                    <h2>Typ av skorsten</h2>
                    <div>
                        <input type="checkbox" defaultChecked={this.state.alternative1} onChange={this.alt1} />
                        <p>Alternative 1</p>
                    </div>

                    <div>
                        <input type="checkbox" defaultChecked={this.state.alternative2} onChange={this.alt2} />
                        <p>Alternative 2</p>
                    </div>
                </div>

                <h2>Över tak</h2>

                <div>
                    <div>
                        <input type="checkbox" defaultChecked={this.state.pusset} onChange={this.pusset} />
                        <p>Pusset pipe</p>
                    </div>

                    <div>
                        <input type="checkbox" defaultChecked={this.state.topavdekning} onChange={this.topavdekning} />
                        <p>Topavdekninge</p>
                    </div>
                </div>

                <div>
                    <div>
                        <input type="checkbox" defaultChecked={this.state.beslag} onChange={this.beslag} />
                        <p>Komplett firkantet beslag</p>
                    </div>

                    <div>
                        <input type="checkbox" defaultChecked={this.state.feieplatform} onChange={this.feieplatform} />
                        <p>Feieplatform (Kun for takstein)</p>
                    </div>
                </div>

                <div>
                    <div>
                        <input type="checkbox" defaultChecked={this.state.feieluke} onChange={this.feieluke} />
                        <p>Feieluke over tak</p>
                    </div>

                    <div>
                        <input type="checkbox" defaultChecked={this.state.tegelforblendet} onChange={this.tegelforblendet} />
                        <p>Tegelforblendet pipe</p>
                    </div>
                </div>

                <div>
                    <div>
                        <input type="checkbox" defaultChecked={this.state.flexiroll} onChange={this.flexiroll} />
                        <p>Flexiroll for tetting mot damsperre</p>
                    </div>

                    <div>
                        <input type="checkbox" defaultChecked={this.state.tetting} onChange={this.tetting} />
                        <p>Tetting mot undertak</p>
                    </div>
                </div>

                <div>
                    <div>
                        <input type="checkbox" defaultChecked={this.state.wakaflex} onChange={this.wakaflex} />
                        <p>Wakaflex - Benyttes som ekstra tetting rundt beslag i spesielt i vaerutsatte områder</p>
                    </div>
                </div>

                <h2>Tillval</h2>
                <div>
                    <div>
                        <input type="checkbox" defaultChecked={this.state.wireset} onChange={this.wireset} />
                        <p>Wireset for heising/montering</p>
                    </div>

                    <div>
                        <input type="checkbox" defaultChecked={this.state.lokk} onChange={this.lokk} />
                        <p>Lokk til tilluftsaddapter</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Roykinnforing 125-160</p>
                        <input type="number" placeholder={0} value={this.state.roykinnforingLiten} onChange={(input) => this.setState({roykinnforingLiten: input.value})} />
                        <p>mm</p>
                    </div>
                    <div>
                        <p>Roykinnforing 150-160</p>
                        <input type="number" placeholder={0} value={this.state.roykinnforingStor} onChange={(input) => this.setState({roykinnforingStor: input.value})} />
                        <p>mm</p>
                    </div>
                </div>


            </div>

        );

    }
}
