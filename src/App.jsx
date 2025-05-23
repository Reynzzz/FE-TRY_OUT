import { useState } from 'react'

import './App.css'
import 'semantic-ui-css/semantic.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';
import store from './stores';


function App() {

  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    </>
  )
}

export default App
