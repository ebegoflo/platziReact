import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Video from './components/Video';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
