import React from "react";
import TopHeader from "../component/TopHeader";
import AIANavbar from "../component/Navbar";
import Footer from "../component/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
   


      <AIANavbar />

    
      <main className="grow">{children}</main>

    
      <Footer />
    </div>
  );
};

export default Layout;
