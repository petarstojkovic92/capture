// Importing pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";

// Importing Global Style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
