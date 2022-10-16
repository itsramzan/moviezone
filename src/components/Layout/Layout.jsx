import React, { useEffect } from "react";
import { useHref } from "react-router-dom";
import scrollTop from "../../utils/scrollTop";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import ScrollTop from "../Shared/ScrollTop";

const Layout = ({ children }) => {
  const href = useHref();

  useEffect(() => {
    scrollTop();
  }, [href]);

  return (
    <div className="min-h-screen w-full grid grid-rows-[auto,1fr,auto] bg-gray-200">
      <Navbar />
      <div className="px-4 py-4 md:px-10">{children}</div>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Layout;
