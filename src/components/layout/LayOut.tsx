/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";

function Layout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 900px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = (e: any) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <div>
      <Outlet />
      {isMobile && (
        <Footer />
      )}
    </div>
  );
}

export default Layout;
