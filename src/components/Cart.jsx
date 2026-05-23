import './Cart.css'
import CartItem from './CartItem'

export default function Cart({cart, addToCart, removeFromCart}) {
    if (cart.length == 0) {
        return (
            <div id="cart">
                <div id="emptyCart">
                    Your cart is empty.
                </div>
            </div>
        )
    }

    const total = cart.reduce((total, item) => total + item.price * item.count, 0);

    return (
        <div id="cart">
            <div>
                {cart.map(item => {
                    return (
                        <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
                    )
                })}
            </div>
            <div id="cartTotal">
                Total: ${total}
            </div>
        </div>
    )
}