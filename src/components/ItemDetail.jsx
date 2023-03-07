import { Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({wine}) => { 
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
      const db = getFirestore();
      const queryDoc = doc(db, 'wines', id);
      getDoc(queryDoc)
      .then(respuesta => setData ({id: respuesta.id, ...respuesta.data() }))
    }, [id]);
    
  return (
    <div className="details" >
            <div key={data.id} >
                <Card boxShadow="5px 5px 5px #202023" bg="AppWorkspace"  maxW='sm' m="10">
                    <CardBody>
                        <Center>
                            <Image
                                src={data.image}
                                maxW='15rem'
                                maxH='20rem'
                                borderRadius='full'
                                bg='#F7F7F7'/>
                        </Center>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' fontFamily="'Montserrat', sans-serif">{data.title}</Heading>
                            <Text>{data.description}</Text>
                            <Text color='#27ae60' fontSize='xl'>${data.price} MXN</Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ItemCount
                            {...data}
                            title={data.title}
                            id={data.id}
                            price={data.price}
                            stock={data.stock}
                            image={data.image}    
                        />
                    </CardFooter>
                </Card>
            </div>
    </div >
  )
}

export default ItemDetail