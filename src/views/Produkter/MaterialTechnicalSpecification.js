import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import '../../styles/Border.css';


export default class MaterialTechnicalSpecification extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
    }

    /**
    * @return View
    */
    render() {
        return (
          <div>
              <Row className='borderBottom' style={styles.textWrapper}>
                  <Col>
                      <p>
                          {this.props.matTecSpec}:
                      </p>
                  </Col>
                  <Col>
                      <p>
                          Value
                      </p>
                  </Col>
              </Row>
          </div>
        );
    }
}

const styles = {
    textWrapper: {
            borderRadius: 1,
            borderBottomWidth: 2,
            borderColor: '#B9B9B9',
        },
};
