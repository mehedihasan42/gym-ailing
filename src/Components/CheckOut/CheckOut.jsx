import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiousSecure';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
// import './CheckOutStyles.css'

const CheckOut = ({ price,courses }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
       if(price > 0){
        axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
            setClientSecret(res.data.clientSecret)
        })
       }
    }, [price,axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            console.log('[error]', error);
        } else {
            setCardError(' ')
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email || 'unknown',
                        name: user.name || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError)
        }

        setProcessing(true)
        if (paymentIntent.status === 'succeeded') {
            setSuccess(paymentIntent.status)
            //save payment information to the server
            const payment = {
            email:user?.email,
            transetionId:paymentIntent.id,
            price,
            quantity:courses.length,
            itemsId: courses.map(course=>course._id),
            courseId: courses.map(course=>course.classId),
            itmesName: courses.map(course=>course.className)
        }
        axiosSecure.post('/payment',payment)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        }


        console.log(paymentIntent)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#000000',
                                backgroundColor: '#DAFF0D',
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
                <button type="submit"
                    className='text-black p-2 rounded font-bold bg-[#DAFF0D] mt-2 cursor-pointer' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600'>{cardError}</p>}
            {success && <p className='text-white text-xl font-bold'>Status: <span className='text-xl text-blue-600 font-bold'>Payment Successful</span></p>}
        </>
    );
};

export default CheckOut;