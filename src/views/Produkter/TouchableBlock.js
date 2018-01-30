import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';

import Material from './Material';

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
        if (order % 2 === 0) {
          return styles.lightBackground;
        } else {
          return styles.darkBackground;
        }
    }

    /**
    * @return listMaterial[...]
    */
    listMaterial() {
        let isLightBackground = true;
        if (this.props.order % 2 === 0) {
          isLightBackground = true;
        } else {
          isLightBackground = false;
        };
        const listMaterial = this.props.material.map((mat, i) =>
                <Material key={i}
                          mat={mat}
                          isLightBackground={isLightBackground}
                          setActiveMaterialDetailView = {this.props.setActiveMaterialDetailView}
                />
            );
        return listMaterial;
    };

    /**
    * @return Image
    */
    getArrowIcon(){
        const arrowIcon = this.state.visible
            ? <img onClick={this.setVisibleDetail} src={require('../../images/arrow_opened.png')} style={styles.img} alt='arrow to close dropdown' />
            : <img onClick={this.setVisibleDetail} src={require('../../images/arrow.png')} style={styles.img} alt='arrow to open dropdown'/>;
        return arrowIcon;
    }

    /**
    * @return View
    */
    render() {
        return (
            <div>
                <Col style={this.bGSwitchingColor(this.props.order)}>
                    <Row style={styles.topic}>
                        <Col md={{ size: 6, offset: 3 }}>
                            <h1>
                                {this.props.materialTopic.tagline}
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col md='auto'>
                            <p>
                                {this.props.materialTopic.ingress}
                            </p>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col md={{ offset: 11, size: 1 }}>
                            {this.getArrowIcon()}
                        </Col>
                    </Row>
                </Col>
                {this.state.visible && (this.listMaterial())}
            </div>
        );
    }
}

const styles = {
    lightBackground: {
        backgroundColor: '#EEEEEE',
    },
    darkBackground: {
        backgroundColor: '#B9B9B9',
    },
    img: {
        height: 30,
        width: 30,
    },
};
