import Navbar from "./Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

function App() {
  let comp
  switch (window.location.pathname) {
    case "/":
      comp = <Home/>
      break
    case "/pricing":
      comp = <Pricing/>
      break
    case "/about":
      comp = <About/>
      break

  }
  return <>
    <Navbar/>
    <div className="container">
        {comp}
    </div>

  </>

}

export default App;
