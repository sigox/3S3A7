import { useState, createContext } from "react";

export const CartData =[
    {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
    },{
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
    },
];

export const CartContext = createContext(0)

export function CartContextProvider({children}){   
    const [product, setProduct] = useState(CartData)
    const total= product.reduce((sumTotal, currentObj) => { 
        return sumTotal + currentObj.quantity * currentObj.price            
    }, 0);
    return (
        <CartContext.Provider value={{product, setProduct, total}}>
            {children}
        </CartContext.Provider>
    )
}