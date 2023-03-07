import { Heading, Flex, Box, Container, Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemListContainer = () => {
    const {category} = useParams();
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const db = getFirestore();
      const winesCollection = collection(db, "wines");
        if (category) {
            const queryFilter = query(winesCollection, where ('category', '==', category))
            getDocs (queryFilter)
            .then(respuesta =>  setData(respuesta.docs.map(product => ({id: product.id, ...product.data()}))));
        } else {
            getDocs (winesCollection)
            .then(respuesta =>  setData(respuesta.docs.map(product => ({id: product.id, ...product.data()}))));
            
        }
      }, [category]);
    if (category === undefined) {
        return(
            <>
                <Container className="saludoPrincipal" maxW="100%" marginBottom="0.5">
                    <Flex justifyContent="center">
                    <Box className='slogan'>
                        <h1>El encuentro es con uno mismo</h1>
                    </Box>
                    </Flex>
                </Container>
                <Container maxW="100%" className='catalogoPrincipal' p="14">
                    <Center>
                        <h1 className='bannerCatalogo' >
                            Nuestro Catálogo
                        </h1>
                    </Center>
                </Container>
                <ItemList data={data} />
            </>
        )
    } else{
        return (
            <>
            <Container maxW="100%" className='catalogoCategory' p="14">
                <Center>
                    <Heading size="lg" color="#fff"  fontFamily="'Montserrat', sans-serif">
                        Selección de vinos para su paladar
                    </Heading>
                </Center>
            </Container>
            <ItemList data={data} />
            
          </>
        )}
    }

export default ItemListContainer