/**
 * 用于控制全局UI
 */
import BaseActions from './BaseActions';
class UIActions extends BaseActions {

    test(inx) {
        console.log(111)
        return inx;
    }
    
}

export default UIActions.createActions();