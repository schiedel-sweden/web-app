import React, {Component} from 'react';

import {Row, Col, Form, FormGroup, Button} from 'reactstrap';


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
            <Row style={styles.bkgnd}>
                <Col md={12}>
                    <Row style={styles.center}>
                        <Col md={12} style={styles.centerText}>
                            <h2>Kontakta oss</h2>

                            <p>Lorem ipsu dolor sit amen, consectutur adipisicing</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                        <Form style={{width: '100%'}}>
                            <FormGroup style={{width: '100%'}}>
                                <input type="text" style={styles.formItem} placeholder={'Ditt namn'} value={this.state.name} onChange={async (name) => {await this.setState({name: name.target.value});this.callback();}} />
                            </FormGroup>
                            <FormGroup>
                                <input type="email" style={styles.formItem} placeholder={'Din e-mail'} value={this.state.email} onChange={async (email) => {await this.setState({email: email.target.value});this.callback();}} />
                            </FormGroup>
                            <FormGroup>
                                <textarea style={styles.formTextInput} placeholder={'Ditt meddelande'} value={this.state.message} onChange={async (message) => {await this.setState({message: message.target.value});this.callback();}} />
                            </FormGroup>
                        </Form>
                        </Col>

                    </Row>
                    {/* TODO: align button to the right*/}
                    <Row style={{marginBottom: 30,}}>
                        <Button style={{marginLeft:'85%'}} type="submit">Skicka!</Button>
                    </Row>

                    <Row style={styles.centerText}>
                        <Col md={4}>
                            <img src={require('../../images/icons/pin.png')} alt='location of schiedel offices' style={styles.img}/>
                            <p>E A rosgrens gata 2z</p>
                            <p>421 31 Västra Frölunda</p>
                        </Col>

                        <Col md={4}>
                            <img src={require('../../images/icons/kontakt.png')} alt='phone to schiedel' style={styles.img} />
                            <p style={{color: '#F9CE3C'}}>013 - 10 70 50</p>
                        </Col>

                        <Col md={4}>
                            <img src={require('../../images/icons/email.png')} alt='email schiedel' style={styles.img} />
                            <p style={{color: '#F9CE3C'}}>info@schiedel.se</p>
                        </Col>
                    </Row>

                </Col>
            </Row>

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
    },
    centerText: {
        textAlign: 'center',
    },
    formItem: {
        maxWidth: '100%',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',

    },
    formTextInput: {
        maxWidth: '100%',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        maxHeight: 400,
        height: 300,

    }

}
