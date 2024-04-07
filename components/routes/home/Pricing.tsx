"use client"
import React, { useState } from 'react'
import Script from 'next/script';
import { useSession } from 'next-auth/react';

declare global {
    interface Window {
        Razorpay: any;
    }
}

const Pricing = () => {

    const [amount, setAmount] = useState('1');
    const [currency, setCurrency] = useState('INR');
    const {status, data:session}= useSession();

    const createOrderId = async () => {
        try {
            const response = await fetch('/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: parseFloat(amount) * 100,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data.orderId;
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const orderId: string = await createOrderId();
            const options = {
                key: process.env.key_id,
                amount: parseFloat(amount) * 100,
                currency: currency,
                name: 'Cnippet',
                description: 'description',
                order_id: orderId,
                handler: async function (response: any) {
                    const data = {
                        orderCreationId: orderId,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                        email: session?.user?.email
                    };

                    const result = await fetch('/api/verify', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json' },
                    });
                    const res = await result.json();
                    if (res.isOk) alert("payment succeed");
                    else {
                        alert(res.message);
                    }
                },
                // prefill: {
                //     name: name,
                //     email: email,
                // },
                // theme: {
                //     color: '#3399cc',
                // },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.on('payment.failed', function (response: any) {
                alert(response.error.description);
            });
            paymentObject.open();
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />
            <section className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-[90%] px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl">
                            Simple no-tricks pricing
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-800 ">
                            Begin with our professional components, which are valid for a duration of 1 year from the date of purchase.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200  sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                Yearly membership
                            </h3>
                            <p className="mt-6 text-base leading-7 text-slate-800 ">
                                Start using our exceptional and reliable services today and take your business to the next level of success and growth.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                                    What&apos;s included
                                </h4>
                                <div className="h-px flex-auto bg-gray-100"></div>
                            </div>
                            <ul
                                role="list"
                                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-slate-800  sm:grid-cols-2 sm:gap-6"
                            >
                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-blue-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    All Pro Components
                                </li>
                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-blue-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    All Pro Templates
                                </li>
                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-blue-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Entry to annual conference
                                </li>
                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-blue-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Official member t-shirt
                                </li>
                            </ul>
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <form onSubmit={processPayment} className="mx-auto max-w-xs px-8">
                                    <p className="text-base font-semibold text-slate-800 ">
                                        Pay once, and it&apos;s yours for a whole year.
                                    </p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900 ">
                                            ₹999
                                        </span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-slate-800 ">
                                            Rupee
                                        </span>
                                    </p>
                                    <button
                                        type='submit'
                                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Get access
                                    </button>
                                    <p className="mt-6 text-xs leading-5 text-slate-800 ">
                                        Invoices and receipts available for easy company reimbursement
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Pricing