import { Center, Container, Flex, Img, Heading} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext';
import CartItems from './CartItems'

const CartComponent = () => {
    const {cart} = useContext(CartContext);

  return cart.length > 0 ? (
    <>
        <Container maxW='100%'marginTop="1" className='contenedorItems'>
            <CartItems/>
        </Container>
    </>
  ) : (
    <>
    <Center>
        <Heading size="md" m='5'>CARRITO VACÍO</Heading>
    </Center>
        <Flex justifyContent='center'>
        <Img src='../src/assets/salem.png' m='3'/>
        </Flex>
    </>
  )
}

export default CartComponent