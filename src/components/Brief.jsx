import {CartContext} from '../context/ShoppingCartContext';
import { useContext } from 'react';
import { Box, Button, Center, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Brief = () => {
  const {orderId} = useContext(CartContext);

  return (
    <>
        <Container maxW='50%' marginTop='12'>
          <Box className='brief'>
          <Center>
            <h1 >Gracias por su compra</h1>
          </Center>
            <h3>Su pedido se ha registrado con éxito</h3>
            <h3>A la brevedad nos pondremos en contacto para registrar su pago</h3>
            <p>Su número de órden es: {orderId} </p>
          </Box>
          <Link to={`/`}>
            <Button marginTop="2" bg="#887493" color="#ffff">Volver al inicio</Button> 
          </Link>
        </Container>
    </>
  )
}

export default Brief