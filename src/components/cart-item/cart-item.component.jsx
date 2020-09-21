import React from 'react';

// import './cart-item.styles.scss';

import { CartItemContainer, CartImg, CartItemDetails, Details } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartImg src={imageUrl} alt="item"/>
        <CartItemDetails>
            <Details>{name}</Details>
            <Details>{quantity} x ${price}</Details>
        </CartItemDetails>
    </CartItemContainer>
);

export default CartItem;