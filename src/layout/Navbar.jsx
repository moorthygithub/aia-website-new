import React from "react";
import TopHeader from "../component/TopHeader";
import AIANavbar from "../component/Navbar";
import Footer from "../component/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <TopHeader />

      {/* Main Header / Navbar */}
      <AIANavbar />

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
