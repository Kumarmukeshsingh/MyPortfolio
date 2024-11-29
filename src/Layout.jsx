import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./compontens/Header/Header";
import Footer from "./compontens/Footer/Footer";
function Layout(){
   return(
      <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>

      </>
   )
}
export default Layout;