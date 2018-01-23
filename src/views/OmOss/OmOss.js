import React, {Component} from 'react';

import {Row, Col} from 'reactstrap';

export default class OmOss extends Component {
    render() {
        return (
            <Col md={12}>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10} style={styles.center} class="text-center">
                    <h2 style={styles.h2}>"Lorem ipsum dolor sit amet"</h2>
                    </Col>
                    <Col md={1}></Col>

                </Row>
                <Row>
                    <p style={styles.sidePadding}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor olor in </p>

                    <p style={Object.assign({}, styles.spaceBetween, styles.sidePadding)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr
                    ehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <p style={styles.sidePadding}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr</p>
                </Row>

                <Row style={styles.height}>
                    <p style={styles.sidePadding}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </Row>

                <Row>
                    <img style={styles.image} src={require('./footer.png')} alt='footer' />
                </Row>

            </Col>

        );

    }
}

const styles = {
    bkgnd: {
        backgroundColor: "#dddddd",
    },
    spaceBetween: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    height: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#dddddd",
    },
    center: {
        textAlign: 'center',
        alignItems: 'center',
        gravity: 'center',
        justifyContent: 'center',
    },
    image: {
        maxWidth: '100%',
        width: '100%',

    },
    sidePadding: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    h2: {
        paddingTop: 20,
        paddingBottom: 20,
    }
}
