import React, { useEffect, useRef } from 'react';
import { postData } from '../../../utils/fetchData';

function PayButton({ total, address, mobile, state, dispatch }) {
    const refPayBtn = useRef()
    const { cart, auth, order } = state
    useEffect(() => {
        paypal.Buttons({
            createOrder: function (data, actions) {
                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '0.01'
                        }
                    }]
                });
            },
            onApprove: function (data, actions) {
                // This function captures the funds from the transaction.
                return actions.order.capture().then(function (details) {
                    // This function shows a transaction success message to your buyer.
                    postData('order', { address, mobile, cart, total }, auth.access_token)
                        .then(res => {
                            if (res.err) return dispatch({ type: "NOTIFY", payload: { msg: { err: res.err } } })

                            dispatch({ type: "CART", payload: [] })
                            dispatch({ type: "ORDER", payload: [...order, res.orders] })
                            dispatch({ type: "NOTIFY", payload: { msg: { success: res.msg } } })
                        })

                    alert('Transaction completed by ' + details.payer.name.given_name);
                });
            }
        }).render(refPayBtn.current);

    }, []);
    return (
        <div ref={refPayBtn} ></div>
    );
}

export default PayButton;