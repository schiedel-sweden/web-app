import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import './Border.css';


export default class MaterialInformationTouchableBlock extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
        this.setVisibleMat = this.setVisibleMat.bind(this);
        this.listInformationDescription = this.listInformationDescription.bind(this);
    }

    /**
    * @return bool setState
    */
    setVisibleMat() {
        this.setState({visible: !this.state.visible});
    }
    /**
    * @return Image
    */
    getArrowIcon(){
        const arrowIcon = this.state.visible
            ? <img onClick={this.setVisibleMat} style={styles.img} src={require('../../images/arrow_opened.png')} alt='opened arrow'/>
            : <img onClick={this.setVisibleMat} style={styles.img} src={require('../../images/arrow.png')} alt='closed arrow'/>;
        return arrowIcon;
    }
    /**
    * @return listMaterial[...]
    */
    listInformationDescription() {
        return(
          <div style={styles.infoDescContainer}>
              <div>
                  <p style={styles.infoDesc}>
                      Bruksområde
                  </p>
                  <p style={styles.infoDesc}>
                      Bruksområde
                  </p>
              </div>
          </div>
        );
    }

    /**
    * @return View
    */
    render() {
        return (
            <div>
                <div onClick={this.setVisibleMat}>
                    <Row className='borderTop' style={styles.touchableContainer}>
                        <Col>
                            <h4>
                                {this.props.matInfo}
                            </h4>
                        </Col>
                        <Col md={1}>
                            {this.getArrowIcon()}
                        </Col>
                    </Row>
                </div>
                {this.state.visible && (this.listInformationDescription())}
            </div>
        );
    }
}

const styles = {
    touchableContainer: {
        backgroundColor: '#B9B9B9',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#EEEEEE',
    },
    img: {
        height: 30,
        width: 30,
    },
};
