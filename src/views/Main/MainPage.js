import React, {Component} from 'react';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={require('../../images/roof.png')} alt='Example of fireplace' />
                </div>

                <div>
                    <div>
                        <img src={require('../../images/prisforslag.png')} alt='got to price suggestion' />
                        <h2>Tillbud</h2>
                    </div>
                    <div>
                        <img src={require('../../images/produkter.png')} alt='got to products'/>
                        <h2>Produkter</h2>
                    </div>
                </div>
            </div>

        );

    }
}
