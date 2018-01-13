import React, {Component} from 'react';

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
        this.props.parentCallback(this.state),
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
