import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Installation from "./components/Installation";
import Features from "./components/Features";
import Compatibility from "./components/Compatibility";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { products } from "./data/products";

function App() {
  const [welcomeLights, interblock] = products;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <ProductDetails product={welcomeLights} />
        <ProductDetails product={interblock} reverse />
        <Installation />
        <Features />
        <Compatibility />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
