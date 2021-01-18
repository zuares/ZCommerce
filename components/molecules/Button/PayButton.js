import React, { useContext, useEffect, useRef } from 'react';
import { DataContext } from '../../../store/GlobalState';
import { patchData } from '../../../utils/fetchData';
import { updateItem } from '../../../store/Actions';

function PayButton({ odr }) {
    const refPayBtn = useRef()
    const { state, dispatch } = useContext(DataContext)
    const { auth, order } = state
    useEffect(() => {
        paypal.Buttons({
            createOrder: function (data, actions) {
                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: odr.total
                        }
                    }]
                });
            },
            onApprove: function (data, actions) {
                // This function captures the funds from the transaction.
                return actions.order.capture().then(function (details) {
                    // This function shows a transaction success message to your buyer.
                    patchData(`order/${odr._id}`, null, auth.access_token)
                        .then(res => {
                            if (res.err) return dispatch({ type: "NOTIFY", payload: { msg: { err: res.err } } })

                            dispatch(updateItem(order, odr._id), {
                                ...order, paid: true, dateOfPayment: new Date().toISOString()
                            }, "ORDER")

                            return dispatch({ type: "NOTIFY", payload: { msg: { success: res.msg } } })
                        })

                    alert('Transaction completed by ' + details.payer.name.given_name);
                });
            }
        }).render(refPayBtn.current);

    }, []);
    return (
        <div ref={refPayBtn} className="max-w-sm mt-6"  ></div>
    );
}

export default PayButton;