import React, {Component} from 'react';

export default class CustomerData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            company: '',

            firstName: '',
            surName: '',

            adress: '',
            postnumber: '',

            city: '',
            country: '',

            sameAsAbove: false,

            receiver: '',

            receiveAdress: '',
            receivePostnumber: '',

            receiverCity: '',
            receiverCountry: '',


        }
    }

    sameAsAbove = async () => {
        await this.setState({
            sameAsAbove: !this.state.sameAsAbove,
        });

        if(this.state.sameAsAbove) {
            this.setState({
                receiver: this.state.firstName + " " + this.state.surName,

                receiveAdress: this.state.adress,
                receivePostnumber: this.state.postnumber,

                receiverCity: this.state.city,
                receiverCountry: this.state.country,

            });
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Faktureringsadress</h2>
                </div>

                <div>
                    <form >
                        <div>
                            <input type="text" placeholder="Företag" name="company" value={this.state.company} onChange={(text) => this.setState({company: text.target.value })}/>
                        </div>

                        <div>
                            <input type="text" placeholder="Förnamn" name="firstName" value={this.state.firstName} onChange={(text) => this.setState({firstName: text.target.value})}/>
                            <input type="text" placeholder="Efternamn" name="surName" value={this.state.surName} onChange={(text) => this.setState({surName: text.target.value})}/>
                        </div>

                        <div>
                            <input type="text" placeholder="Adress" name="adress" value={this.state.adress} onChange={(text) => this.setState({adress: text.target.value})}/>
                            <input type="number" placeholder="Postnummer" name="postnumber" value={this.state.postnumber} onChange={(text) => this.setState({postnumber: text.target.value})}/>
                        </div>

                        <div>
                            <input type="text" placeholder="Stad" name="city" value={this.state.city} onChange={(text) => this.setState({city: text.target.value})}/>
                            <input type="text" placeholder="Land" name="country" value={this.state.country} onChange={(text) => this.setState({country: text.target.value})}/>
                        </div>

                        <div>
                            <input type="number" placeholder="Telefonnummer" name="phonenumber" value={this.state.phonenumber} onChange={(text) => this.setState({phonenumber: text.target.value})}/>
                            <input type="email" placeholder="E-post" name="email" value={this.state.email} onChange={(text) => this.setState({email: text.target.value})}/>
                        </div>
                        {/* Make it so that the button does not reload page, or at least navigates back to the same place */}
                        <button>Submit</button>

                        <div>
                            <h3>Leveransadress</h3>
                            <label>

                                <input type="checkbox" defaultChecked={this.state.sameAsAbove} onChange={this.sameAsAbove}/>
                                Samma som faktureringsadress
                            </label>
                        </div>

                        <div>
                            <input type="text" placeholder="Mottagare" name="receiver" value={this.state.receiver} onChange={(text) => this.setState({receiver: text.target.value})} />

                        </div>

                        <div>
                            <input type="text" placeholder="Adress" name="receiveAdress" value={this.state.receiveAdress} onChange={(text) => this.setState({receiveAdress: text.target.value})} />
                            <input type="number" placeholder="Postnumber" name="receivePostnumber" value={this.state.receivePostnumber} onChange={(text) => this.setState({receivePostnumber: text.target.value})} />
                        </div>

                        <div>
                            <input type="text" placeholder="Stad" name="receiverCity" value={this.state.receiverCity} onChange={(text) => this.setState({receiverCity: text.target.value})} />
                            <input type="text" placeholder="Land" name="receiverCountry" value={this.state.receiverCountry} onChange={(text) => this.setState({receiverCountry: text.target.value})} />

                        </div>
                    </form>
                </div>





            </div>

        );

    }
}
