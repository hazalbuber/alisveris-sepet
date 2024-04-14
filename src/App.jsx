import Header from "./components/Header"
import Product from "./components/Products"
import Cart from "./components/Cart"
import { useState } from "react"

function App() {
  const [cart, setCart] = useState([])

  return (
    <div className="container mx-auto p-4">
      <Header />
      <Product cart={cart}  setCart={setCart}/>
      <Cart cart = {cart} />
    </div>
  )
}

export default App
