import React from "react";
import Link from "next/link";

const links = [
    {
        id: 1,
        title: "Components",
        url: "/components",
    },
    {
        id: 2,
        title: "Templates",
        url: "/templates",
    },
    {
        id: 3,
        title: "Contacts",
        url: "/contacts",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
];

const Navbar4 = () => {
    return (
        <>
            <nav>
                <div className="bg-black">
                    <div className="mx-auto flex h-10 items-center justify-between px-4 sm:px-6 lg:px-8">
                        <div className="hidden text-sm text-white lg:block lg:flex-1">
                            English
                        </div>
                        <div className="hidden flex-1 items-center lg:flex">
                            <Link href="#" className="text-sm text-gray-200">
                                Get free delivery on orders over $100
                            </Link>
                        </div>
                        <div className="ml-auto flex lg:flex-1 lg:items-center lg:justify-end lg:gap-2">
                            <Link href="#" className="text-sm text-gray-100">
                                Sign In
                            </Link>
                            <span className="mx-2 h-4 w-[1px] bg-gray-200"></span>
                            <Link href="#" className="text-sm text-gray-100">
                                Create an account
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="sticky top-0 bg-white z-20">
                <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-6 lg:px-8">
                    <div className="flex lg:flex-none">
                        <Link href="/" className="-m-1.5 p-1.5 text-2xl text-black">
                            Cnippet <span className="text-base">Ui.</span>
                        </Link>
                    </div>

                    <div className="ml-10 hidden lg:flex lg:gap-x-12">
                        {links.map((link) => (
                            <Link
                                key={link.id}
                                href={link.url}
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:ml-8 lg:flex lg:flex-none lg:items-center lg:gap-4 lg:pl-8">
                        <Link href="#">
                            <span className="sr-only">profile</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                ></path>
                            </svg>
                        </Link>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-4 text-gray-900"
                        >
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
                </div>
            </header>
        </>
    );
};

export default Navbar4;