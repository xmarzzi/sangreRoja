import { createContext, useState} from 'react'

export const CartContext = createContext(null);
export const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(1);
    const [orderId, setOrderId] = useState("");

    const add = () =>{
        setCount(count + 1);
    };
    const substract = () =>{
        setCount(count - 1);
    };

    const removeProduct = (id) => setCart(cart.filter (item => item.id !== id));
    const total = cart.reduce((acc, {quantity,price})=> acc + quantity * price, 0);
    const borrarCart = () => setCart([]);

    return <CartContext.Provider value={{cart, setCart, removeProduct, total, count, setCount, orderId, setOrderId, borrarCart, add, substract}}> {children} </CartContext.Provider>
};

