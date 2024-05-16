
import React from "react";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Error from "./components/Error";


const appRouter=createBrowserRouter ([{
  path:"/",
 element:<Body/>,
 children:[{
  path:"/",
 element:<MainContainer/>,
 },
 {
  path:"watch",
  element:<WatchPage/>,
 },
 ],

errorElement : <Error/>,
},


])



function App() {
  return (
    <Provider store={store}>
    <div >
      
     <Head/>
     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
