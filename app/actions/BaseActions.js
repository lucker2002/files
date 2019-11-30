import alt from "../assets/AltInstance";

class BaseActions {
    static createActions() {
        return alt.createActions(this);
    }

    /* static promiseAction(...args) {
        return dispatch => {
            return new Promise((resolve, reject) => {
                args.push(resolve);
                args.push(reject);
                dispatch(args);
            })
        }
    } */
}

export default BaseActions;