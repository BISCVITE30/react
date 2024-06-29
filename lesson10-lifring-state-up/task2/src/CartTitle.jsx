import React from "react";

const CartTitle = ({ count, userName }) => {
    return <div className="cart-title">{`${userName.firstName}, you added ${count} items`}</div>;
}

export default CartTitle;