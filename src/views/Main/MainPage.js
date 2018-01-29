import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <img src={require('../../images/roof.png')} style={styles.headerImage} alt='Example of fireplace' />
                <Row style={{'padding-bottom': '50px'}}>
                    <Col md={1} />

                    <Col md={10}>
                        <Row>
                            <Col md={6} style={styles.receiptButton}>
                                <img onClick={this.props.navPris} src={require('../../images/prisforslag.png')} style={styles.image} alt='got to price suggestion' />
                                <p style={{fontSize: 24, 'text-align': 'center',}}> Tillbud </p>
                            </Col>
                            <Col md={6} style={styles.receiptButton}>
                                <img onClick={this.props.navProd} src={require('../../images/produkter.png')} style={styles.image} alt='got to products'/>
                                <p style={{fontSize: 24, 'text-align': 'center',}}> Produkter </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1} />
                </Row>
            </div>
        );

    }
}

const styles = {
    headerImage: {
        'max-width': '86%',
        'height': 'auto',
        'display': 'block',
        'cursor': 'pointer',
        'cursor': 'hand',
        'margin-left': 'auto',
        'margin-right': 'auto',
    },
    image: {
        'max-width': '30%',
        'height': 'auto',
        'display': 'block',
        'cursor': 'pointer',
        'cursor': 'hand',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'padding-bottom': '1%',
    },
    receiptButton: {
        'max-width': '100%',
        'height': 'auto',
        'padding-top': '6%',
        'border-style': 'solid',
        borderColor: '#333333',
        borderWidth: 4,
    },
}
