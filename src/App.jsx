import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Brief from './components/Brief'
import CartComponent from './components/CartComponent'
import Checkout from './components/Checkout'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <>
        <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:category' element={<ItemListContainer/>} />
            <Route exact path='/item/:id' element={<ItemDetailContainer/>} /> 
            <Route exact path='/cart' element={<CartComponent/>} /> 
            <Route exact path='/checkout' element={<Checkout/>} /> 
            <Route exact path='/brief' element={<Brief/>} /> 
          </Routes>
        </BrowserRouter>
        </ShoppingCartProvider>
   
    </>
  )
}

export default App
