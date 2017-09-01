import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
// let store = compose(applyMiddleware(), autoRehydrate())(createStore)(reducers);
// persistStore(store);

// also, replace Provider store={createStoreWithMiddleware(reducers)} with Provider store={store}

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>,
	document.querySelector('.container-fluid')
);

// export default store;
