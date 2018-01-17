import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

export default class MainPage extends Component {
    render() {
        return (
            <Row>
                <Col md={1} />

                <Col md={10}>
                    <Row>
                        <img src={require('../../images/roof.png')} alt='Example of fireplace' />
                    </Row>

                    <Row>
                        <Col md={6}>
                            <img src={require('../../images/prisforslag.png')} style={styles.image} alt='got to price suggestion' />
                            <h2>Tillbud</h2>
                        </Col>
                        <Col md={6}>
                            <img class="img-responsive" src={require('../../images/produkter.png')} style={styles.image} alt='got to products'/>
                            <h2>Produkter</h2>
                        </Col>
                    </Row>
                </Col>
                <Col md={1} />
            </Row>

        );

    }
}

const styles = {
    image: {
        "max-width": "100%",
        "height": "auto",
        "display": "block",
    }
}
