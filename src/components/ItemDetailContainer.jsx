import { Center, Container } from '@chakra-ui/react';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const querydb = getFirestore();
        const winesCollection = collection(querydb, 'wines');
        getDocs(winesCollection)
        .then(respuesta =>  setData(respuesta.docs.map(product => ({id: product.id, ...product.data()}))));
    }, [])
    
  return (
    <>
        <Container>
            <Center>
                <ItemDetail wine={data} />
            </Center>
        </Container>
    </>
  )
}

export default ItemDetailContainer