import React from 'react';
import BaseComponent from "../components/BaseComponent";
import { hot } from 'react-hot-loader';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import UIStore from "../stores/UIStore";
import "../assets/skin/css/Global.scss";
import Index from "./Index";

import Nav from "../components/nav/Nav";
import nav from "../components/nav/navData"
const Router = BrowserRouter;

class App extends BaseComponent {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={"layerMain"}>
                <div className={"navTop"}>
                    <h1>logo</h1>
                    <ul>
                        <li>菜单1</li>
                        <li>菜单2</li>
                    </ul>
                </div>
                <div className={"contentBody"}>
                    <Nav type={"fileTree"} data={nav} />
                    <div className={"contentMain"}>
                        <Router>
                            <Route render={({ location }) => (
                                <Switch key={location.pathname} location={location}>
                                    <Route path="/" exact component={Index} />

                                </Switch>
                            )} />
                        </Router>
                    </div>
                </div>
            </div>

        )
    }
}
export default hot(module)(App.altConnect([UIStore]));