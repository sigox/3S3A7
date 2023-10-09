import { useContext } from 'react';
import minus from '../icons/minus.svg';
import plus from '../icons/plus.svg';
import { CartContext } from '../context/CartContext';

function CartItem ({item, children}) {    
    return (
        <div className="product-container col col-12" key={item.id} data-count={item.quantity} data-price={item.price}>
            <img className="img-container"src={item.img} alt="" />
            <div className="product-info">
                <div className="product-name">{item.name}</div>
                <div className="product-control-container">
                    <div className="product-control">
                        {children}
                    </div>
                </div>
                <div className="price">${item.quantity*item.price}</div>
            </div>
        </div>
    )
}

function Cart() {
    const {product, setProduct, total} = useContext(CartContext)
    const CartInner = product.map ( Data => {
        function minusClick(){
            if (Data.quantity!==0){
                setProduct(product.map(products=>{
                    if (products.id === Data.id){
                        return {...products, quantity:products.quantity-1}
                    }else{return products}
                }))
            }
        }
        function plusClick(){
            setProduct(product.map(products=>{
                if (products.id === Data.id){
                    return {...products, quantity:products.quantity+1}
                }else{return products}
            }))
        }
        return(
            <CartItem item={Data}>
                <img src={minus} className="product-action minus" alt="" onClick={minusClick} />
                <span className="product-count">{Data.quantity}</span>
                <img src={plus} className="product-action plus" alt="" onClick={plusClick} />
            </CartItem>
        );
    })
    return(
        <section className="cart-container col col-lg-5 col-sm-12">
            <h3 className="cart-title">購物籃</h3>
            <section className="product-list col col-12" data-total-price="0">
                {CartInner}
            </section>
            <section className="cart-info shipping col col-12">
                <div className="text">運費</div>
                <div className="price">免費</div>
            </section>
            <section className="cart-info total col col-12">
                <div className="text">小計</div>
                <div className="price">${total}</div>
            </section>
        </section>
    )
}

export default Cart;