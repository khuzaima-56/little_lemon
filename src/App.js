import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./Styles/App.css";
import "./Styles/header.css"
import "./Styles/hero.css"
import "./Styles/specials.css"
import "./Styles/testimonials.css"
import "./Styles/about.css"
import "./Styles/footer.css"

function App() {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  const [selectedPage, setSelectedPage] = useState(
    currentPage
  );
  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  useEffect(() => { 
    const newPage = location.pathname.slice(1)
    setSelectedPage(
      newPage
    )
    console.log('Here')
  },[location.pathname])
  return (
    <div className="container">
      <Header />
      <Nav selectedPage={selectedPage} onPageChange={handlePageChange} />
      <Main />
      <Footer selectedPage={selectedPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
