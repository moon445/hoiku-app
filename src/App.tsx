// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './components/App.css'
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import Notice from "./pages/Notice/Notice";
import Growth from "./pages/Growth/growth";
import Setting from "./pages/Setting/Setting";
import UpMail from "./pages/Setting/UpMail";
import UpPass from "./pages/Setting/UpPass";
import store from './store';

const router = createBrowserRouter([
  { path: '/', element: <Signin /> },
  { path: '/Notice', element: <Notice /> },
  { path: '/Growth', element: <Growth /> },
  { path: '/Setting', element: <Setting /> },
  { path: '/Setting/UpMail', element: <UpMail /> },
  { path: '/Setting/UpPass', element: <UpPass /> },
]);


function App() {

  return (

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  );

}

export default App
