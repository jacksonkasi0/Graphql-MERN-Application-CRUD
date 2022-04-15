import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.scss';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import appReducer from './store/reducer/movieApp';

const client = new ApolloClient({
  uri:  process.env.REACT_APP_BACKEND_URL, //'http://localhost:5000/graphql'
  cache: new InMemoryCache(),
});

const store = createStore(appReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
