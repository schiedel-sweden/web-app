import React, {Component} from 'react';

export default class HouseType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            antalPiper: this.props.propState.antalPiper,
            totalHeight: this.props.propState.totalHeight,
            heightAboveRoof: this.props.propState.heightAboveRoof,
            roofAngle: this.props.propState.roofAngle,

            tillMone: this.props.propState.tillMone,
            franMone: this.props.propState.franMone,

            calcValue: this.props.propState.calcValue,
        }
    }

    callback = () => {
        this.props.parentCallback(this.state);
    }

    values = () => {
        alert(this.state.antalPiper);
    }

    render() {
        return (
            <div>
                <div>
                    <div><img style={styles.houseImage} src={require('../../images/hus-skiss.png')} alt='house sketch'/></div>
                </div>

                <div>
                    <div>
                        <p>antal piper:</p>
                        <input value={this.state.antalPiper} placeholder={0} type="number" onChange={async (input) => {await this.setState({antalPiper: input.target.value}); this.callback();}}  />
                    </div>
                </div>

                <div>
                    <div>
                        <p>Höjd över tak (H2)</p>
                        <input value={this.state.heightAboveRoof} placeholder={0} type="number" onChange={async (input) => {await this.setState({heightAboveRoof: input.target.value}); this.callback()}} />
                        <p>mm</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Total Höjd (H1)</p>
                        <input value={this.state.totalHeight} placeholder={0} type="number" onChange={async (input) => {await this.setState({totalHeight: input.target.value}); this.callback()}} />
                        <p>mm</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Takvinkel (V)</p>
                        <input value={this.state.roofAngle} placeholder={0} type="number" onChange={async (input) => {await this.setState({roofAngle: input.target.value}); this.callback()}} />
                        <p>grader</p>
                    </div>
                </div>

                <h2>Beräkna total höjd (H1) och höjd över taket (h2)</h2>

                <div>
                    <div>
                        <p>Höjd till mone (A4)</p>
                        <input value={this.state.tillMone} placeholder={0} type="number" onChange={async (input) => {await this.setState({tillMone: input.target.value}); this.callback()}} />
                        <p>mm</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Avstånd från mone</p>
                        <input value={this.state.franMone} placeholder={0} type="number" onChange={async (input) => { await this.setState({franMone: input.target.value}); this.callback()}} />
                        <p>mm</p>
                    </div>
                </div>

                <div>
                    <button onClick={this.values} >Beräkna</button> {/* does nothing so far */}
                    <p>{this.state.calcValue} mm</p>
                </div>

            </div>
        );

    }
}

let styles = {
    houseImage: {
        width: 400,
        height: 300,
    }
}
