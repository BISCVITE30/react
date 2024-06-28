import React from 'react';

const ProductsList = ({ cartItems }) => {
  const prodList = cartItems.map(product => {
    return (
      <li className="products__list-item" key={product.id}>
        <span className="products__item-name">{product.name}</span>
        <span className="products__item-price">{`$${product.price}`}</span>
      </li>
    );
  });

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  
  return (
    <div className="products">
      <ul className="products__list">{prodList}</ul>
      <div className="products__total">{`Total: $${total}`}</div>
    </div>
  );
};

export default ProductsList;
