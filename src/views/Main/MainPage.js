import React, {Component} from 'react';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={require('../../images/roof.png')} />
                </div>

                <div>
                    <div>
                        <img src={require('../../images/prisforslag.png')} />
                        <h2>Tillbud</h2>
                    </div>
                    <div>
                        <img src={require('../../images/produkter.png')} />
                        <h2>Produkter</h2>
                    </div>
                </div>
            </div>

        );

    }
}
