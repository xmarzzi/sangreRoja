import {FormControl, Card, CardBody, FormLabel, Stack, FormHelperText, Button, Input, Container, Heading, Box, Flex, Center, Img, Text} from '@chakra-ui/react'
import {collection, getFirestore, addDoc} from 'firebase/firestore';
import { useState } from 'react';
import {CartContext} from '../context/ShoppingCartContext';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const today = new Date();
    const now = today.toLocaleString();
    const {cart,  total, orderId, setOrderId, borrarCart} = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailVerificado, setEmailVerificado] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
  

    const compraAlert = () => {
        Swal.fire({
          title: 'Confirma su compra?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sí, comprar!'
        }).then((result) => {
          result.isConfirmed ? (borrarCart(), setAdress(""),
          setEmail(""),
          setEmailVerificado(""),
          setPhone(""), Swal.fire('Enviado!')) : ("");
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email != emailVerificado) {
            alert("El email no coincide");
          } else {
            addDoc(ordersCollection, ordenes).then(({ id }) => setOrderId(id));
            compraAlert();
            e.target.reset();
          }; 
    }
    
    const db = getFirestore();
    const ordersCollection = collection (db, "ordenes");
    
    const ordenes = {
        Cliente: { name, email, phone, adress},
        Pedido_del_cliente: {cart},
        Precio_total_de_la_compra: {total},
        fecha_: {now}
    };


  return (
    <>
    <Container>
    <Heading size='md' m="12" color="#5b4d57" >Su pedido se detalla a continuación</Heading>
    {cart.map((item) => {
        return (
          <Container key={item.id} maxW="100%"  marginBottom="4">
            <Card background="blackAlpha.300" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
              <Img objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={item.image} alt='Caffe Latte'></Img>
              <Stack >
                <CardBody >
                  <Heading size='md'>{item.title} </Heading>
                  <Text as="b">Unidades pedidas: {item.quantity} </Text>
                  <Text> Precio: ${item.quantity * item.price} MXN  </Text>
                </CardBody>
              </Stack>
            </Card>
          </Container>
        );
      })}
            <Box>
            <Heading as="h4" size="md"> Total de su compra: ${total} MXN </Heading>
            </Box>
    </Container>
    <Container maxW='90%' marginTop="4" marginBottom="16" className='contenedorForm'>
        <Center>
        <Container m="28">
         <Heading size='md' color="#5b4d57" >No olvides completar el formulario.</Heading>
            <h3>Nos comunicaremos contigo para proceder con el pago.</h3>
        <FormControl isRequired className='formCart' p='6' m='4' >
            <form onSubmit={handleSubmit}>
            <FormLabel>Nombre y Apellido</FormLabel>
                <Input placeholder='Nombre y apellido completo' type='text' onChange={(e) => setName(e.target.value)} />
            <FormLabel>Email</FormLabel>
                <Input type='email' name='email1' id='email1' onChange={(e) => setEmail(e.target.value)}/>
            <FormLabel> Ingrese nuevamene su Email</FormLabel>
                <Input placeholder='Debe coincidir con el email anteriormentte administrado' type='email' name='email2' id='email2' onChange={(e) => setEmailVerificado(e.target.value)}/>
            <FormLabel>Teléfono de contacto</FormLabel>
                <Input placeholder='Telefono de contacto' type='number' onChange={(e) => setPhone(e.target.value)} />
            <FormLabel>Dirección de envío</FormLabel>
                <Input placeholder='Dirección a enviar pedido' type='text' onChange={(e) => setAdress(e.target.value)}/>
                <FormHelperText>Nosotros nunca compartiremos tu información personal.</FormHelperText>
            <Button m={12} padding="8" colorScheme='teal' type='submit'> Enviar pedido </Button>
                <Link to={`/brief`}>
            <Button m={12} padding="8" colorScheme='orange' type='submit'> Ver mi pedido </Button>
                </Link>
                
            
            </form>
        </FormControl>
    </Container>
    </Center>
    </Container>
    </>
  )
}

export default Checkout