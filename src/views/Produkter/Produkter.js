import React, { Component } from 'react';

import TouchableBlock from './TouchableBlock';
import MaterialDetail from './MaterialDetail';
import { API_URL_NO } from '../../env.js';

export default class Produkter extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            materialTopics: [{id: 0, tagline: "Toggle material 1 items", ingress: "material one"},
                        {id: 1, tagline: "Toggle material 2 items", ingress: "material two"},
                        {id: 2, tagline: "Toggle material 3 items", ingress: "material tree"}],
            material: [],
            visible1: true,
            data: [],
            refreshing: false,
            ismaterialDetailViewActived: false,
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.getmaterial = this.getmaterial.bind(this);
        this.listTouchableBlock = this.listTouchableBlock.bind(this);
        this.setActivematerialDetailView = this.setActivematerialDetailView.bind(this);
        this.activeView = this.activeView.bind(this);
    }

    /**
    * @return bool state false
    */
    _onRefresh() {
        this.setState({ refreshing: true });
        // temporary -----
        this.setState({
          ismaterialDetailViewActived: false
        });
        this.fetchData().then(() => {
            this.setState({ refreshing: false });
        });
    }
    /**
    * @return object data
    */
    componentWillMount() {
        this.fetchData();
    }
    /**
    * @return bool
    */
    setActivematerialDetailView(e) {
        e.preventDefault()
          this.setState({
            ismaterialDetailViewActived: !this.state.ismaterialDetailViewActived
          });
    }
    /**
    * @return object data
    */
    fetchData = async () => {
        fetch(`${API_URL_NO}/excel/30`)
            .then(response => response.json())
            .then(responseData => {
                this.setState({ data: responseData });
                this.getmaterial();
            })
            .catch(error => {
                console.log(error);
            });
    }
    /**
    * @return return array
    */
    getmaterial() {
        let ids = [];
        // material "144029"
        let materialArr = [];

        for (let i = 0; i < this.state.data.length; i++) {
            // add items to material array
            if (i < 5) {
                materialArr.push(this.state.data[i].designation);
            }

            ids.push(this.state.data[i].id);
        }
        this.setState({
            material: materialArr,
        });
    }
    /**
    * @return TouchableBlock[...]
    */
    listTouchableBlock() {
        const listTouchableBlock = this.state.materialTopics.map((topic, i) =>
            <TouchableBlock key = {i} materialTopic={topic}
            visible={this.state.visible1}
            material={this.state.material}
            order={i}
            setActivematerialDetailView = {this.setActivematerialDetailView}/>
        );
        return listTouchableBlock;
    }
    /**
    * @return View
    */
    activeView() {
        return this.state.ismaterialDetailViewActived
          ? <MaterialDetail />
          : this.listTouchableBlock();
    }

    /**
    * @return View
    */
    render() {
        return (
            <div style={styles.container}>
                {this.state.isMaterialDetailViewActived &&

                    <img style={styles.img}
                        src={require('../../images/arrow_opened.png')}
                        alt='arrow opened'
                    />
                }

            {this.activeView()}

            </div>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      position: 'absolute',
      left: 10,
      top: 40,
      width: 40,
      zIndex: 1,
    },
    img: {
        height: 30,
        width: 30,
    },
};
