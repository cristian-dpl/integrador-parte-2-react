import { Link } from "react-router-dom"
import { Cart } from "../components/Cart"
export const NavBar = () => {
  return (
    <header className="navbar__container">
          <nav >
              <Link to="/"><h2 className="title__home">Jugueteria Cosmica</h2></Link>
              <Link to="/upload">Alta</Link>
              <Link to="/contact">Contactanos</Link>
              <Link to="/we">Nosotros</Link>
          </nav>
        <div>
            <Cart/>
        </div>
    </header>
  )
}
