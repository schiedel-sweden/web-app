import React, { Component } from 'react';

import MaterialInformationTouchableBlock from './MaterialInformationTouchableBlock';
import MaterialTechnicalSpecification from './MaterialTechnicalSpecification';

export default class MaterialDetail extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            materialInfoList: ["Bruksområde", "Brenseltyper", "Funksjoner/Fordeler", "HUSK"],
            materialTechnicalSpecsList: ["Streamningmotstand", "Varmeresisten",
              "Trykkfasthet ytterelement", "TrykkFasthet innerror",
              "Byggehoyde", "Feietest", "Frosttest"],
        }
        this.listMaterialInformation = this.listMaterialInformation.bind(this);
        this.listMaterialTechnicalSpecification = this.listMaterialTechnicalSpecification.bind(this);
    }

    /**
    * @return MaterialInformationTouchableBlock[...]
    */
    listMaterialInformation() {
        const materialInfoListTabB=  this.state.materialInfoList.map((matInfo, i) =>
          <MaterialInformationTouchableBlock
              key={i}
              matInfo={matInfo}
          />
        );
        return materialInfoListTabB;
    }
    /**
    * @return MaterialTechnicalSpecification[...]
    */
    listMaterialTechnicalSpecification() {
        const materialTechnicalSpecsListViews=  this.state.materialTechnicalSpecsList.map((matTecSpec, i) =>
          <MaterialTechnicalSpecification
              key={i}
              matTecSpec={matTecSpec}
          />
        );
        return materialTechnicalSpecsListViews;
    }

    /**
    * @return View
    */
    render() {
        return (
          <div style={styles.container}>
              <img
                  style={styles.img}
                  src={require('../../images/roof.png')}
                  alt='roof with chimney'
              />
              <div style={{'padding-top': '40px'}}>
                  <h2>
                      Solid vent
                  </h2>
                  <h4 style={{'padding-top': '10px'}}>
                      Solid vent
                  </h4>
                  <p>
                      djshaf adskjfna fd askfj asd dsjf dsfjh dsaf jidsf öasfdhkhk
                  </p>
                  <h4 style={{'padding-bottom': '10px'}}>
                      Information
                  </h4>
              </div>
              {this.listMaterialInformation()}
              <div style={{'padding-top': '40px'}}>
                  <h4 style={{'padding-bottom': '10px'}}>
                      Technical Specification
                  </h4>
                  {this.listMaterialTechnicalSpecification()}
              </div>
          </div>
        );
    }
}

const styles = {
    container: {
        'padding-bottom': '50px',
    },
    text: {

        textAlign: 'left',
    },
    img: {
        'max-width': '100%',
        'height': 'auto',
        'display': 'block',
        'cursor': 'pointer',
        'cursor': 'hand',
        'margin-left': 'auto',
        'margin-right': 'auto',
    },

};
