import React, { Component } from 'react';

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
          <div style={this.switchingContainerColor(this.props.order)}>
              <div style={styles.content}>
                  <p>
                      djshaf adskjfna fd askfj asd dsjf dsfjh dsaf jidsf öasfdhkhk
                  </p>
                  <button
                      style={styles.button}
                      onClick={function() {
                          this.props.touchMethod(this.props.order)
                      }.bind(this)}>
                      <p>Velg Permeter</p>
                  </button>
              </div>
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
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
};
