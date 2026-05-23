import './Card.css'
import { useState } from 'react'

export default function Card({product, addToCart}) {
    const [count, setCount] = useState(1);
    
    function handleCountChange(e) {
        setCount(e.target.value);
    }

    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className="card">
            <div className='image'>
                <img src={product.image} alt="" />
            </div>
            <p className="title">{product.title}</p>
            <p>${product.price}</p>
            <div className='counter'>
                <button onClick={decreaseCount} >-</button>
                <input type="number" value={count} onChange={handleCountChange} />
                <button onClick={increaseCount} >+</button>
            </div>
            <button onClick={() => {
                addToCart(product.id, count, product.title, product.image, product.price)
            }} >Add to cart</button>
        </div>
    )
}