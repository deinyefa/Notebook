import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';

import App from './components/app';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
let store = compose(applyMiddleware(), autoRehydrate())(createStore)(reducers);
persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('.container-fluid')
);

export default store;
