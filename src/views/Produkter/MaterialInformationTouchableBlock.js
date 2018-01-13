import React, { Component } from 'react';


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
            ? <img  src={require('../../images/arrow_opened.png')}/>
            : <img src={require('../../images/arrow.png')} />;
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
                <div onPress={this.setVisibleMat}>
                    <div style={styles.touchableContainer}>
                        <div style={styles.touchableItem}>
                            <h4>
                                {this.props.matInfo}
                            </h4>
                             {this.getArrowIcon()}
                        </div>
                    </div>
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
    touchableItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoDescContainer: {

    },
    infoDesc: {

    },
};
