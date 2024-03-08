"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, PieChart } from "lucide-react";

import H1 from "@/public/images/hero/hero11.jpg";
import H2 from "@/public/images/hero/hero8.jpg";

const menu = [
    {
        title: "Soluction",
        image: H1,
        solutions: [
            {
                name: "Analytics",
                description: "Get a better understanding of your traffic",
                href: "#",
            },
            {
                name: "Analytics",
                description: "Get a better understanding of your traffic",
                href: "#",
            },
        ],
    },
    {
        title: "Analytics",
        image: H2,
        solutions: [
            {
                name: "Analysdfdsftics",
                description: "Getsddfsdf a better understanding of your traffic",
                href: "#",
            },
            {
                name: "Analsfsytics",
                description: "Get a better understanding of your traffic",
                href: "#",
            },
        ],
    },
];

const S1 = () => {
    const [open, setOpen] = useState(null);

    const toggleOpen = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <header className="relative isolate py-8 md:pb-64 overflow-visible">
            <div className="relative flex justify-between max-w-md ml-40">
                {menu.map((item, i) => (
                    <div key={i} className="relative hidden lg:flex lg:gap-x-12">
                        <button
                            onMouseEnter={() => toggleOpen(i)}
                            onMouseLeave={() => toggleOpen(i)}
                            onFocus={() => toggleOpen(i)}
                            className="inline-flex justify-center items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                            <span>{item.title}</span>
                            <ChevronDown className="h-5 w-5" aria-hidden="true" />

                            {open === i && (
                                <div className="absolute -left-5 z-10 mt-5 top-1 pt-2 flex w-screen max-w-max px-4">
                                    <div className="w-screen max-w-[38rem] flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-2 flex flex-row space-x-3">
                                            <Image
                                                src={item.image}
                                                alt="image"
                                                className="w-[15rem] rounded-2xl object-cover"
                                            />
                                            <div className="p-2 flex flex-col space-y-1">
                                                {item.solutions.map((item, j) => (
                                                    <div
                                                        key={j}
                                                        className="group relative flex rounded-lg py-2 px-4 hover:bg-gray-50"
                                                    >
                                                        <div className="text-left">
                                                            <a
                                                                href={item.href}
                                                                className="font-semibold text-gray-900"
                                                            >
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </a>
                                                            <p className="mt-1 text-gray-600 font-medium">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default S1;
