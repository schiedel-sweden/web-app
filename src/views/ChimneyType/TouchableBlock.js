import React, { Component } from 'react';
import Detail from './Detail';
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
import {Row, Col} from 'reactstrap';
>>>>>>> 18e1dd497e67122eed1156336bc130d5fa23f387
=======
import {Row, Col} from 'reactstrap';
>>>>>>> Stashed changes

export default class TouchableBlock extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
        this.setVisibleDetail = this.setVisibleDetail.bind(this);
        this.bGSwitchingColor = this.bGSwitchingColor.bind(this);
        this.getArrowIcon = this.getArrowIcon.bind(this);
    }

    /**
    * @return bool setState
    */
    setVisibleDetail() {
        this.setState({visible: !this.state.visible});
    }
    /**
    * @param props.order
    * @return styles
    */
    bGSwitchingColor(order){
<<<<<<< Updated upstream
<<<<<<< HEAD
        if (order % 2 == 0) {
=======
        if (order % 2 === 0) {
>>>>>>> 18e1dd497e67122eed1156336bc130d5fa23f387
=======
        if (order % 2 === 0) {
>>>>>>> Stashed changes
          return styles.lightBackground;
        } else {
          return styles.darkBackground;
        }
    };
    /**
    * @return Image
    */
    getArrowIcon(){
        const arrowIcon = this.state.visible
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
            ? <img onClick={this.setVisibleDetail} src={require('../../images/arrow_opened.png')} style={styles.img} alt='arrow to close dropdown' />
            : <img onClick={this.setVisibleDetail} src={require('../../images/arrow.png')} style={styles.img} alt='arrow to open dropdown'/>;
        return arrowIcon;
    }

    /**
    * @return View
    */
    render() {
        return (
            <div style={this.bGSwitchingColor(this.props.order)}>
                <Row style={styles.centerText}>
                    <Col md={{ size: 6, offset: 3 }}>
                        <h1>
                            {this.props.chimneyType.tagline}
                        </h1>
                    </Col>
                </Row>
                <Row style={styles.centerText}>
                    <Col md={{ size: 6, offset: 3 }}>
                        <p>
                            {this.props.chimneyType.ingress}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}></Col>

                    <Col md={1}>
                        <img style={styles.img}
                            src={require('../../images/add.png')}
                            onClick={function() {
                            this.props.touchMethod(this.props.order)
                            }.bind(this)}
                            alt='Add this item' />
                    </Col>
                    <Col md={1}>
                        {this.getArrowIcon()}
                    </Col>

                </Row>
                <div>
                    {this.state.visible &&
                    <Detail order={this.props.order}
                        touchMethod={this.props.touchMethod} />}
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lightBackground: {
        backgroundColor: '#EEEEEE',
    },
    darkBackground: {
        backgroundColor: '#B9B9B9',
    },
    img: {
        alignSelf: 'flex-end',
        height: 30,
        width: 30,
    },
    centerText: {
        textAlign: 'center',
    }
};
