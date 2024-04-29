import React from "react";
import Header from './components/headers/Headers';
import Footer from './components/footers/Footers'
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}