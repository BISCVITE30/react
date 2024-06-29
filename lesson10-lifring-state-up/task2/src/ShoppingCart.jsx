import React from 'react';
import CartTitle from './CartTitle.jsx';
import ProductsList from './ProductsList.jsx';

const ShoppingCart = ({ cartItems, userData }) => {

  return (
    <div className="column">
      <CartTitle userData={userData} count={cartItems.length} />
      <ProductsList cartItems={cartItems}/>
    </div>
  );
};

export default ShoppingCart;
