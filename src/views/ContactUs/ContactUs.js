import React, {Component} from 'react';


export default class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.propState.name,
            email: this.props.propState.email,
            message: this.props.propState.message,
        }
    }
    callback = () => {
        this.props.parentCallback(this.state);
    }


    render() {
        return (
            <div>
                <div style={styles.bkgnd}>
                    <div>

                        <h2>Kontakta oss</h2>

                        <p>Lorem ipsu dolor sit amen, consectutur adipisicing</p>
                    </div>
                    <div>
                        <form>
                            <input type="text" placeholder={'Ditt namn'} value={this.state.name} onChange={async (name) => {await this.setState({name: name.target.value});this.callback();}} />
                            <input type="email" placeholder={'Din e-mail'} value={this.state.email} onChange={async (email) => {await this.setState({email: email.target.value});this.callback();}} />
                            <input type="text" placeholder={'Ditt meddelande'} value={this.state.message} onChange={async (message) => {await this.setState({message: message.target.value});this.callback();}} />
                        </form>
                        <button type="submit">Skicka!</button>
                    </div>

                    <div>
                        <div>
                            <img src={require('../../images/icons/pin.png')} alt='location of schiedel offices' style={styles.img}/>
                            <p>E A rosgrens gata 2z</p>
                            <p>421 31 Västra Frölunda</p>
                        </div>

                        <div>
                            <img src={require('../../images/icons/kontakt.png')} alt='phone to schiedel' style={styles.img} />
                            <p>013 - 10 70 50</p>
                        </div>

                        <div>
                            <img src={require('../../images/icons/email.png')} alt='email schiedel' style={styles.img} />
                            <p>info@schiedel.se</p>
                        </div>
                    </div>

                </div>
            </div>

        );

    }
}
const styles = {
    bkgnd: {
        backgroundColor: "#eee",
    },
    img: {
        height: 32,
        widht: 32,
    }
}
