// Importing pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDatail";
import ContactUs from "./pages/ContactUs";

// Importing Global Style
import GlobalStyle from "./components/GlobalStyle";

// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
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
    </div>
  );
}

export default App;
