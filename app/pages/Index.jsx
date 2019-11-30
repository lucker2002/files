import React from 'react';
import UIStore from "../stores/UIStore"
import UIActions from "../actions/UIActions"
import BaseComponent from "../components/BaseComponent"
class Index extends BaseComponent {
    constructor() {
        super();
        this.state = {
            
        }
    }
    testData(){
        let test = 2
        UIActions.test(test)
    }
    render() {
        let {fluxtest} = this.props;
        return (
            <div >
                <button onClick={this.testData.bind(this)}>测试数据流</button>
                <span>{fluxtest}</span>
            </div>

        )
    }
}

export default Index.altConnect([UIStore])