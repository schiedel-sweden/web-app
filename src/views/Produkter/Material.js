import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import '../../styles/Border.css';

export default class Material extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        this.switchingContainerColor = this.switchingContainerColor.bind(this);
    }
    /**
    * @param bool props.isLightBackground
    * @return styles
    */
    switchingContainerColor(lightBackground){
      if (lightBackground) {
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
          <Col className='borderTop' style={this.switchingContainerColor(this.props.isLightBackground)}>
              <Row>
                  <Col md={{size: 'auto', offset: 1}}>
                      <h4>
                          {this.props.mat}
                      </h4>
                  </Col>
              </Row>
              <Row>
                  <Col md={{size: 'auto', offset: 1}}>
                      <p>
                          djshaf adskjfna fd askfj asd dsjf dsfjh dsaf jidsf öasfdhkhk
                      </p>
                  </Col>
              </Row>
              <Row>
                  <Col md={{size: 'auto', offset: 1}}>
                      {/*When the link is being press
                         the view will change from 'TouchableBlock' to 'MaterialDetail'*/}
                      <div onClick={this.props.setActiveMaterialDetailView}>
                          <p style={styles.link}>
                              Läs mer...
                          </p>
                      </div>
                  </Col>
              </Row>
          </Col>
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
    text: {
        textAlign: 'left',
    },
    link: {
        color: '#F9CE3C',
        textAlign: 'left',
    },
};
