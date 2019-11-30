/**
 * 用于保存全局UI状态
 */
import BaseStore from '../stores/BaseStore';
import UIActions from '../actions/UIActions';

class UIStore extends BaseStore {
    constructor() {
        super();
        this.bindActions(UIActions);
        this.state = {
            fluxtest:0
        }
    }

    onTest(test) {
        console.log("store",test)
        this.setState({ fluxtest:test });
    }
    
}

export default UIStore.createStore();