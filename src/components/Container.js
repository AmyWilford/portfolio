import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./About";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return (
        <Home currentPage={currentPage} handlePageChange={handlePageChange} />
      );
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    // return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
