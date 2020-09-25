//entry 파일 (진입 파일)
// ※  npm run build 빌드 명령어
// 1) 개발할 때는 npm run start --> 이것저것 기능들이 많이 들어있어서 엄청 용량이 크다.
// 2) 개발하다가 어플리케이션을 완성한 후에는 npm run build --> 용량을 엄청 줄여준다.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
