import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

const PageSkeleton = () => {
  return (
    <div className="relative h-[640px] overflow-hidden bg-gray-200">
      <div className="absolute inset-0 shimmer" />
    </div>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow min-h-screen">
        {loading ? <PageSkeleton /> : children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
