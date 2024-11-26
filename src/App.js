//components
import About from "./components/About";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Search from "./components/Search";

export default App;

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Search></Search>
      <Product></Product>
      <About></About>
      <Footer></Footer>
    </>
  );
}
