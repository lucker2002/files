import React from 'react';
import {connect} from 'alt-react';
import Utils from '../tools/Utils';
import PropTypes from 'prop-types';

class BaseComponent extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    static altConnect(stores) {
        if (!stores || !Array.isArray(stores)) stores = [];
        return Utils.altConnect(this, connect, stores);
    }

    routerPush(url) {
   
        this.context.router.history.push(url);
    }

    routerBack() {
        
        this.context.router.history.goBack();
    }

    
}

export default BaseComponent;
