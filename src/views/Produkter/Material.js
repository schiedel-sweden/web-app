import React, { Component } from 'react';


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
          <div style={this.switchingContainerColor(this.props.isLightBackground)}>
              <h4>
                  {this.props.mat}
              </h4>
              <p>
                  djshaf adskjfna fd askfj asd dsjf dsfjh dsaf jidsf öasfdhkhk
              </p>
              <div onClick={this.props.setActiveMaterialDetailView}>
              <p style={styles.link}>
                  Läs mer... // the screen to navigate to is not avalaible yet
              </p>
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
    text: {
        textAlign: 'left',
    },
    link: {
        color: '#F9CE3C',
        textAlign: 'left',
    },
};
