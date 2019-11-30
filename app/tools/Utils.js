

import { connect } from "alt-react";
import _ from 'lodash';
class Utils {
    /**
    * Connect component with stores
    * @param {Component} component - react component Object
    * @param {connect} connect - alt-react connect
    * @param {Array<Store>} stores - want connect store
    * @returns {Object} - alt connect Object
    */
    static altConnect(component, connect, stores) {
        return connect(
            component,
            {
                listenTo() {
                    return stores;
                },
                getProps() {
                    let result = {};
                    for (let store of stores) result = _.merge(result, store.getState());
                    return result;
                }
            }
        );
    }

   
   
}

export default Utils;