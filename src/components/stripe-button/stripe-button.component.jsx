import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const puslishablekey = 'pk_test_51HNGk2BaSTZ3EFnloXE3C9n4LxPVBM5xAQTqacQDsjdpEWHWZ8g6K9BbmVXOuGNA4MPm8zJy8zC7Axk6H18aiVbR00fxm8okFE'

    const onToken = token => {
        console.log(token);
        toast.success('payment successful');
    };

    return (
        <>
            <ToastContainer/>
            <StripeCheckout 
                label='Pay Now' 
                name='CRWN Clothing Ltd'
                billingAddress
                shippingAddress
                imageUrl='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={puslishablekey}
            />
        </>
    );
};

export default StripeCheckoutButton;