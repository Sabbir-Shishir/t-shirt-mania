import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item!!!</p>
    } else if (cart.length === 1) {
        message = <div>
            <h3>Amar jonno ekta nao</h3>
            <p>tomar nijer jonno ekta</p>
            <p><small>amar jonno arekta naw, please</small></p>
        </div>
    }
    else {
        message = <p>Thanks for buying!!</p>
    }


    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>Tin jon k gift diba?</p> : <p>kino kino</p>}
        </div>
    );
};

export default Cart;

/* 
    Conditional Rendering
    1. use element in a variable and then use if-else to set value
    2. ternary operator condition ? true : false
    3. && operator
    ASBB995296895
*/