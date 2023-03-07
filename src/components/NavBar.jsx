import { Box} from '@chakra-ui/react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { CartContext } from '../context/ShoppingCartContext'
import CartWidget from './CartWidget'

const NavBar = () => {
  const {cart} = useContext(CartContext);
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
    <header>
            <Link to={"/"}> 
                <div className='logo'>
                <img src={logo}/>
                </div>
            </Link>
            <nav>
              <ul className='nav'>
                <li> <NavLink to={`/category/${"Vino Tinto"}`}>Vinos Tintos</NavLink> </li>
                <li> <NavLink to={`/category/${"Vino Blanco"}`}>Vinos Blancos</NavLink> </li>
                <li> <NavLink to={`/category/${"Vino Rose"}`}>Vinos Rosé</NavLink> </li>
              </ul>
            </nav>
             
            <Box className='carrito'>
              <Link to={"/cart"}>
                <span>{quantity}</span>
                <CartWidget  />
              </Link>
            </Box>
            
      </header> 
    </>
  )
}

export default NavBar