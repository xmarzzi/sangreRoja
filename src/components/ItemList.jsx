import { Wrap } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Item from './Item'
import Loading from './Loading';

const ItemList = ({data}) => {
  const [loading, setLoading] = useState (true);
  const [wine, setWine] = useState ([]);

  useEffect(() => {
    setTimeout(() => {
      setWine(wine);
      setLoading(false);
  },3000);
  }, []);

  if (loading){
    return(
      <Loading/>
    )
  }
  
  return (
    <div>
    <Wrap spacing='1rem' justify='center'>
        {data.map((wine) =>(
      <Item
          key={wine.id}
          id={wine.id}
          image={wine.image}
          title={wine.title}
          description={wine.description}
          price={wine.price}
          stock={wine.stock}
          category={wine.category} />
      ))} 
    </Wrap>
    </div>
  )
}

export default ItemList