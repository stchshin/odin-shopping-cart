import './CartItem.css'

export default function CartItem({item, addToCart, removeFromCart}) {
    return (
        <div className='cartItem'>
            <img src={item.image} alt="" />
            <div>
                <p className='cartTitle'>{item.title}</p>
                <p className='cartPrice'>${item.price}</p>
                <p className='subtotal'>${item.price * item.count}</p>
                <div className='counter'>
                    <button onClick={() => {
                        if (item.count > 1){
                            addToCart(item.id, -1);
                        }
                    }}>-</button>
                    <p>{item.count}</p>
                    <button onClick={() => {
                        addToCart(item.id, 1)
                    }}>+</button>
                </div>
            </div>
            <button className='removeItem' onClick={() => removeFromCart(item.id)}>✕</button>
        </div>
    )
}