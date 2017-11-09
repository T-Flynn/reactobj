import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/routing.component'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
