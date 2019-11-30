
import React from 'react';
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import App from "./pages/App";

const rootEl = document.getElementById("content");

const render = () => {
	ReactDOM.render(
		<AppContainer>
			<App/>
		</AppContainer>
		, rootEl);
};
render();
