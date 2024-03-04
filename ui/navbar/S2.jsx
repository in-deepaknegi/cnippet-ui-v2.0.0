import React from "react";
import Link from "next/link";

const links = [
    {
        id: 1,
        title: 'Components',
        url: '#',
    },
    {
        id: 2,
        title: 'Templates',
        url: '#',
    },
    {
        id: 3,
        title: 'About',
        url: '#',
    },
    {
        id: 4,
        title: 'Contacts',
        url: '#',
    },
]

const Navbar2 = () => {
    return (
        <header className="relative isolate bg-white overflow-hidden">
            <nav className="flex flex-1 items-center justify-between px-6 py-5 lg:px-8">
                <div className="flex">
                    <Link href="/" className="-m-1.5 p-1.5 text-2xl">
                        Cnippet <span className="text-sm">Ui.</span>
                    </Link>
                </div>
                <div className="hidden lg:flex ml-auto lg:gap-x-12">
                    {links.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            className="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-950"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pl-4 border-l border-gray-700">
                    <Link href="#">Sign in</Link>
                    <Link
                        href="#"
                        className="-my-2.5 ml-8 inline-flex justify-center rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                        <span>
                            Get pro <span aria-hidden="true">→</span>
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 rounded-md p-4 text-gray-900">
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar2;
