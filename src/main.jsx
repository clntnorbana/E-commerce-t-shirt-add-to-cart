import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import MenApparels from "./pages/MenApparels.jsx";
import WomenApparels from "./pages/WomenApparels.jsx";
import ShopAll from "./pages/ShopAll.jsx";
import SaleApparels from "./pages/SaleApparels.jsx";
import ProductView from "./pages/ProductView.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<Home />} />
      <Route path="/shop" element={<ShopAll />} />
      <Route path="/shop/men" element={<MenApparels />} />
      <Route path="/shop/women" element={<WomenApparels />} />
      <Route path="/shop/sale" element={<SaleApparels />} />
      <Route path="/product/:id" element={<ProductView />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
