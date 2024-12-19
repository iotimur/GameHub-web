import React from "react";

import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { globalStyles } from "./global-styles";
import { Global } from "@emotion/react";

import { store } from './_data_/store'

const App = () => {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <PageRoutes />
      </BrowserRouter>
    </Provider>
    </>
  );
};

export default App;
