import { Card, Center, CardBody, CardFooter,Stack,Heading, Divider, Button, Text, Image} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { WrapItem } from '@chakra-ui/react'

const Item = ({id, image, title, price}) => {
  return (
    <>
        <div key={id} >
        <WrapItem maxW="25%"> 
            <Center>
                <Card boxShadow="5px 5px 5px #7e7e7f" bg="AppWorkspace" gap='2' m='10' >
                    <CardBody >
                        <Image
                        src={image}
                        alt='producto'
                        borderRadius='full'
                        maxW="30vh"
                        maxH="30vh"
                        bg='#F7F7F7'
                        
                        />
                        <Stack mt='6' spacing='0.5'>
                        <Heading size='md' fontFamily="'Montserrat', sans-serif">{title}</Heading>
                        <Text color='#28ba65' fontSize={{ base: '10px', md: '16px', lg: '20px' }}>${price} MXN</Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                        <Center>
                    <CardFooter>
                            <Button bg="AppWorkspace" borderBottom="5px solid #756270">
                                <NavLink to={`/item/${id}`}>Ver Ítem</NavLink>
                            </Button>
                    </CardFooter>
                        </Center>
                </Card>
            </Center>
    </WrapItem>
    </div>
    </>
  )
}

export default Item