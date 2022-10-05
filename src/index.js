import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import GlobalStyle from 'stylesConfig/GlobalStyle';
import { theme } from './stylesConfig/theme';
import { store, persistedStore } from 'store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <GlobalStyle />
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
    <ToastContainer />
  </Provider>
  // </React.StrictMode>
);
