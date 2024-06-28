import React from 'react';
import CartTitle from './CartTitle.jsx';
import ProductsList from './ProductsList.jsx';

const ShoppingCart = ({ cartItems, userData, count }) => {
  return (
    <div className="column">
      <CartTitle userData={userData} count={count} />
      <ProductsList cartItems={cartItems}/>
    </div>
  );
};

export default ShoppingCart;
