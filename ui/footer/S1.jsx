import React from "react";

const Footer1 = () => {
    return (
        <footer className="relative isolate bg-white py-10">
            <div className="px-6 sm:flex sm:items-center sm:justify-between lg:px-8">
                <a
                    href="/"
                    className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
                >
                    <span className="self-center whitespace-nowrap text-2xl font-medium">
                        CnippetUI
                    </span>
                </a>
                <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-700 sm:mb-0 ">
                    <li>
                        <a href="#" className="me-4 hover:underline md:me-6">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="me-4 hover:underline md:me-6">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="me-4 hover:underline md:me-6">
                            Licensing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 w-full border-gray-300 lg:my-8" />
            <span className="block px-6 text-sm text-gray-700 sm:text-center md:px-0">
                Designed by:{" "}
                <a target="_blank" href="https://www.deepaknegi.in/">
                    Deepak Negi
                </a>
            </span>

            <span className="mt-2 block px-6 text-sm text-gray-700 sm:text-center md:px-0">
                © 2024{" "}
                <a href="/" className="hover:underline">
                    CnippetUi™
                </a>
                . All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer1;
