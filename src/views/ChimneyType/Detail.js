import React, { Component } from 'react';
import {Row, Col, Button} from 'reactstrap';
import '../../styles/Border.css';


export default class Detail extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        this.switchingContainerColor = this.switchingContainerColor.bind(this);
    }
    /**
    * @param int props.order
    * @return styles
    */
    switchingContainerColor(order){
      if (order % 2 === 0) {
        return styles.containerLightBackground;
      } else {
        return styles.containerDarkBackground;
      }
    };

    /**
    * @return View
    */
    render() {
        return (
          <div className='borderTop' style={this.switchingContainerColor(this.props.order)}>
              <Row>
                  <Col md={{ size: 6, offset: 3 }}>
                      <p>
                          djshaf adskjfna fd askfj asd dsjf dsfjh dsaf jidsf öasfdhkhk
                      </p>
                  </Col>
              </Row>
              <Row>
                  <Col></Col>
                  <Col md='auto'>
                      <Button
                          style={styles.button}
                          size="lg"
                          color="warning"
                          onClick={function() {
                              this.props.touchMethod(this.props.order)
                          }.bind(this)}>
                          Velg Permeter
                      </Button>
                  </Col>
                  <Col></Col>
              </Row>
          </div>
        );
    }
}

const styles = {
    containerLightBackground: {
        backgroundColor: '#EEEEEE',
        borderTopWidth: 2,
        borderTopColor: '#B9B9B9',
    },
    containerDarkBackground: {
        backgroundColor: '#B9B9B9',
        borderTopWidth: 2,
        borderTopColor: '#EEEEEE',
    },
    button: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#F9CE3C',
    },
};
