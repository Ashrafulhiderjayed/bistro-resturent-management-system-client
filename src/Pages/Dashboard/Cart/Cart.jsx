import React from 'react';
import useCart from '../../../hooks/useCart';

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((prevValue, currValue) => prevValue + currValue.price, 0)
    return (
        <section>
            <div>
            <h2 className='text-3xl p-8'>My Cart{cart.length}</h2>
            <h2 className='text-3xl p-8'>Total Price: {totalPrice}</h2>
            <button className='btn btn-primary'>Pay</button>
            </div>
        </section>
    );
};

export default Cart;