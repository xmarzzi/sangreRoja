import { Button, CardBody, CardFooter, Center, Container, Heading, Card, Text, Img, Stack, Flex, Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import {CartContext} from '../context/ShoppingCartContext';

const CartItems = () => {
  const {cart, removeProduct, total, borrarCart} = useContext(CartContext);
  const mostrarAlert = () => {
    cart.map((item) => {
    Swal.fire({
      title: 'Está seguro de eliminar el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      result.isConfirmed ? (removeProduct (item.id), Swal.fire('Elimiando!', 'Tu carrito ha sido elimiando.', 'success') ) : ("");
    })
  })}

  return (
    <>
      <Center  h="100px" color="black">
        <Heading as="h2" size="xl">
          Carrito
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container key={item.id} maxW="container.sm"  marginBottom="4">
            <Card background="blackAlpha.300" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
              <Img objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={item.image} alt='Caffe Latte'></Img>
              <Stack >
                <CardBody >
                  <Heading size='md'>{item.title} </Heading>
                  <Text as="b">Cantidad de unidades en el carrito: {item.quantity} </Text>
                  <Text> Precio: ${item.quantity * item.price} MXN  </Text>
                </CardBody>
                <CardFooter>
                  <Button color='#a88ea1' bg='#ffffff' onClick={() => mostrarAlert()} fontSize="sm">Borrar producto del carrito</Button>  
                </CardFooter>
              </Stack>
            </Card>
          </Container>
        );
      })}
        <Flex justifyContent="end" marginEnd="24" paddingBottom="6">
        <Box className='carritoFooter'>
     <Heading as="h4" size="md" className='texto-borde'> Total de su compra: ${total} MXN </Heading>
     <Button marginTop="2" bg="#b9695e" color="#000000" marginEnd='2' onClick={() => borrarCart()} >Borrar todo el carrito</Button> 
     <Link to={`/checkout`}>
     <Button marginTop="2" bg="#61434b" color="#ffff" >Comprar</Button> 
     </Link>
        </Box>
        </Flex>
     
    </>
  )
}

export default CartItems