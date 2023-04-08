import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

import "./Styles/App.css";
import "./Styles/header.css"
import "./Styles/hero.css"
import "./Styles/specials.css"
import "./Styles/testimonials.css"
import "./Styles/about.css"
import "./Styles/footer.css"

function App() {
  return (
    <div className="container">
        <Header />
        <Nav />
        <Main />
        <Footer />

    </div>
  );
}

export default App;
