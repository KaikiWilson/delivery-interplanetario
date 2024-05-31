import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import EditAddress from "./pages/EditAddress/EditAddress.js";
import AddresForm from "./pages/AddressForm/AddressForm";

const MyRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route index element = { <AddresForm/> }  path="/" exact />
                <Route element = { <EditAddress/> }  path="/Edit&Address" />
            </Routes>
       </BrowserRouter>
   )
}

export default MyRoutes;