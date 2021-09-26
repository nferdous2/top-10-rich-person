import React from 'react';
//counting carts value
const Cart = (props) => {
    const { cart } = props || {}
    const totalReducer = (prevAge, currentAge) => prevAge + currentAge.Age
    const total = cart.reduce(totalReducer, 0)
    console.log(cart);
    return (
        <div>
            <h3><i class="fas fa-user-friends"></i>
                Selected-persons: {cart.length}
            </h3>
            <h3>Total Age:{total}</h3>
            <ul>
                {
                    cart.map(person => <li>{person.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;