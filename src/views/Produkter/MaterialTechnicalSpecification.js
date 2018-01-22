import React, { Component } from 'react';


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
          <div style={styles.container}>
              <div style={styles.textWrapper}>
                  <div style={styles.tecSpec}>
                      <p>
                          {this.props.matTecSpec}:
                      </p>
                  </div>
                  <div>
                      <p>
                          Value
                      </p>
                  </div>
              </div>
          </div>
        );
    }
}

const styles = {
    container: {

    },
    textWrapper: {
        flexDirection: 'row',
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },
    tecSpec: {
        width: 200,
    },
};
