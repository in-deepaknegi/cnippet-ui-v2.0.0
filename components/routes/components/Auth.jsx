"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { useState } from 'react';

const Auth = ({ components }) => {
    const [activeTab, setActiveTab] = useState([0, 0, 0, 0, 0]);
    const [pro, setPro] = useState('');
    const { data: session } = useSession();

    const email = session?.user?.email;
    // console.log(email);

    useEffect(() => {
        async function fetchPro() {
            if (!email) return; // Add a guard clause if email is not available yet

            try {
                const data = { email };
                const result = await fetch('/api/pro', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' },
                });
                const res = await result.json();

                if (res.pro === true) {
                    setPro(true);
                } else {
                    setPro(false);
                }
            } catch (error) {
                console.error('Error fetching pro data:', error);
            }
        }
        fetchPro();
    }, [email])

    // console.log(pro); //displayed in browser

    const changeTab = (index, tabIndex) => {
        const newActiveTab = [...activeTab];
        newActiveTab[index] = tabIndex;
        setActiveTab(newActiveTab);
    };

    return (
        <div className="mt-10 space-y-28 bg-white pb-px">
            {components.map((component, index) => (
                <section key={index} id={`${component.title}`}>
                    <div className="grid grid-cols-[1fr,auto] items-center">
                        <div className="flex min-w-0">
                            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
                                {component.title}
                            </h2>
                            <p className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-200 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">
                                TailwindCss
                            </p>
                            <p className="ml-3 hidden whitespace-nowrap rounded-lg bg-dusk-700 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-100 lg:block">
                                React
                            </p>
                        </div>
                        <div className="p-0.5">
                            <div className="flex space-x-1 rounded-lg bg-slate-100 p-0.5">
                                <button
                                    onClick={() => changeTab(index, 0)}
                                    className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab[index] === 0 ? "bg-white shadow" : ""} transition-all ease-in-out duration-500`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#0950f6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-purple-600"
                                    >
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    <span className="sr-only text-stone-900 lg:not-sr-only lg:ml-2">
                                        Preview
                                    </span>
                                </button>
                                <button
                                    onClick={() => changeTab(index, 1)}
                                    className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab[index] === 1 ? "bg-white shadow" : ""} transition-all ease-in-out duration-500`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#3e75f4"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="16 18 22 12 16 6" />
                                        <polyline points="8 6 2 12 8 18" />
                                    </svg>
                                    <span className="sr-only text-stone-900 lg:not-sr-only lg:ml-2">
                                        Code
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="col-span-2 row-start-2 mt-3 min-w-0 overflow-hidden rounded-2xl border border-gray-300">
                            {activeTab[index] === 0 ? (
                                component.component
                            ) : (
                                <div className="overflow-y-auto break-words text-sm">
                                    {component.code}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Auth