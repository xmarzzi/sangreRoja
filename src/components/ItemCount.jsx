import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, Center, IconButton, Tooltip } from '@chakra-ui/react';
import { useContext } from 'react';
import {CartContext} from '../context/ShoppingCartContext'

const ItemCount = ({title, price, id, stock, image}) => {
    const {count, setCart, add, substract} = useContext(CartContext);
    const addToCart = () => {
        setCart((recorrerItems) =>{
          const itemEncontrado = recorrerItems.find((item) => item.id === id);
          if (itemEncontrado) {
            return recorrerItems.map((item) =>{item.id === id? {...item, quantity: item.quantity + count } : (item)})
          } else{
            return [...recorrerItems, {id, quantity: count, price, title, image}];
          }
        });
      }; 
    
  return (
    <>
    <ButtonGroup>
        {count < 1 ? (<Tooltip label="No puede ser menor a 0" placement='bottom'><IconButton icon={<MinusIcon/>} isDisabled/></Tooltip>) : (<IconButton bg="#cdadc4" icon={<MinusIcon/>} onClick={substract}/>)}
        <Center><span> {count} </span></Center>
        {count < stock ? (<IconButton bg="#cdadc4" icon={<AddIcon/>} onClick={add} />) : (<Tooltip label="changos, no hay stock disponible para su compra" placement='bottom'><IconButton  icon={<AddIcon/>} isDisabled/></Tooltip>)}
        <Button bg="#cdadc4" onClick={() =>addToCart()}> Agregar al carrito </Button>
    </ButtonGroup>
    </>
  )
}

export default ItemCount