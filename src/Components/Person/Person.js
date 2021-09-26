import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Info from '../Info/Info';
import './Person.css'

const Person = () => {
    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (person) => {
        const newCart = [...cart, person]
        setCart(newCart)
    }
    useEffect(() => {
        fetch('/info.JSON')
            .then((res) => res.json())
            .then((data) => setPersons(data));
    }, [])
    return (

        <div className="person-container">
            <div>
                <div className="person">
                    {persons.map(person => <Info person={person}
                        handleAddProduct={handleAddProduct}></Info>)}

                    <div className="cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Person;