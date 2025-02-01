/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next'
import { i18nextReactInitConfig } from './i18next'

import App from './app';
i18next.t = i18next.t.bind(i18next)
const i18nextPromise = i18nextReactInitConfig(i18next)
  
  
export default () => <App/>;
  
let rootElement: ReactDOM.Root
  
export const mount = async (Component, element = document.getElementById('app')) => {
  rootElement = ReactDOM.createRoot(element)
  await i18nextPromise
  rootElement.render(<Component/>)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if(module.hot) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await i18next.reloadResources()
    module.hot.accept('./app', ()=> {
      rootElement.render(<Component/>)
    })
  }
}

export const unmount = () => {
  rootElement.unmount();
};
