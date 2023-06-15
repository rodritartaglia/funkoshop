import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import { Route } from "wouter"
import Footer from "./components/Footer"
import SingleProduct from "./components/SingleProduct"

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/products/:id" component={SingleProduct} />
      </main>
      <Footer/>
    </div>
  )
}

export default App
