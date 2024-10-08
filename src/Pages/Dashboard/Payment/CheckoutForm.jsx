import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            console.error('stripe or elements not initialized');
            return;
        }

        const card = elements.getElement(CardElement)

        if(card == null){
            console.error('No card element found');
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if(error) {
            console.error('Error creating payment method', error);
            setError(error.message);
            return;
        }

        else{
            console.log('Payment method', paymentMethod);
            setError('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm btn-primary my-4' type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className='text-red-500'>{error}</p>
        </form>
    );
};

export default CheckoutForm;