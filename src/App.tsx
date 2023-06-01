import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import router from "./routing";
import Header from "./components/Header";
import "animate.css/animate.min.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
