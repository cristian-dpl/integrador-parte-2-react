import { CartProvider } from "./context/CartProvider"
import { RoutersApp } from "./routes/RoutersApp"

function App() {
  return (
    <>
    <CartProvider>
      <RoutersApp/>
    </CartProvider>
    </>
  )
}

export default App
