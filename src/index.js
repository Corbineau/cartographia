import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "cesium/Source/Widgets/widgets.css";
import buildModuleUrl from "cesium/Source/Core/buildModuleUrl";
import * as serviceWorker from './serviceWorker';
buildModuleUrl.setBaseUrl('./cesium/');


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
