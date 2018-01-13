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

            roykinnforingLiten: '',
            roykinnforingStor: '',

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
                        <label>
                            <input type="checkbox" defaultChecked={this.state.alternative1} onChange={this.alt1} />
                            Alternative 1
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.alternative2} onChange={this.alt2} />
                            Alternative 2
                        </label>
                    </div>
                </div>

                <h2>Över tak</h2>

                <div>
                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.pusset} onChange={this.pusset} />
                            Pusset pipe
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.topavdekning} onChange={this.topavdekning} />
                            Topavdekninge
                        </label>
                    </div>
                </div>

                <div>
                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.beslag} onChange={this.beslag} />
                            Komplett firkantet beslag
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.feieplatform} onChange={this.feieplatform} />
                            Feieplatform (Kun for takstein)
                        </label>
                    </div>
                </div>

                <div>
                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.feieluke} onChange={this.feieluke} />
                            Feieluke over tak
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.tegelforblendet} onChange={this.tegelforblendet} />
                            Tegelforblendet pipe
                        </label>
                    </div>
                </div>

                <div>
                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.flexiroll} onChange={this.flexiroll} />
                            Flexiroll for tetting mot damsperre
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" defaultChecked={this.state.tetting} onChange={this.tetting} />
                        <p>Tetting mot undertak</p>
                    </div>
                </div>

                <div>
                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.wakaflex} onChange={this.wakaflex} />
                            Wakaflex - Benyttes som ekstra tetting rundt beslag i spesielt i vaerutsatte områder
                        </label>
                    </div>
                </div>

                <h2>Tillval</h2>
                <div>
                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.wireset} onChange={this.wireset} />
                            Wireset for heising/montering
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" defaultChecked={this.state.lokk} onChange={this.lokk} />
                            Lokk til tilluftsaddapter
                        </label>
                    </div>
                </div>

                <div>
                    <div>
                        <label>
                            Roykinnforing 125-160
                            <input type="number" placeholder={0} value={this.state.roykinnforingLiten} onChange={(input) => this.setState({roykinnforingLiten: input.target.value})} />
                            mm
                        </label>
                    </div>
                    <div>
                        <label>
                            Roykinnforing 150-160
                            <input type="number" placeholder={0} value={this.state.roykinnforingStor} onChange={(input) => this.setState({roykinnforingStor: input.target.value})} />
                            mm
                        </label>
                    </div>
                </div>


            </div>

        );

    }
}
