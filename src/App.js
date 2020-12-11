// Importing pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDatail";
import ContactUs from "./pages/ContactUs";

// Importing Global Style
import GlobalStyle from "./components/GlobalStyle";

// Router
import { Switch, Route, useLocation } from "react-router-dom";

// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <AboutUs />
          </Route>
          <Route exact path='/work'>
            <OurWork />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
