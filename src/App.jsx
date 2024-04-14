import Header from "./components/Header"
import Product from "./components/Products"
import Cart from "./components/Cart"

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <Product />
      <Cart/>
    </div>
  )
}

export default App
