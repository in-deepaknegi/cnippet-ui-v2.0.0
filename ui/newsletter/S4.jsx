import React from "react";

const Newsletter3 = () => {
    return (
        <section className="px-6 py-6 lg:px-8 lg:py-20">
            <div
                className="relative isolate overflow-hidden rounded-2xl bg-white shadow-xl shadow-gray-400"
                style={{
                    backgroundImage: "url('/images/hero/hero7.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="absolute z-[-9] h-full w-full bg-gradient-to-b from-black/20 to-black/60"></div>

                <div className="relative isolate overflow-hidden py-12 sm:px-24">
                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-wide text-white sm:text-4xl">
                        Get the Latest Hiking Updates
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-200 sm:text-base">
                        Subscribe to our newsletter today and be the first to receive expert
                        hiking tips, exciting outdoor adventures, and exclusive offers that
                        you won&apos;t find anywhere else!
                    </p>
                    <form action="" className="col-span-5 mx-auto mt-6 max-w-lg lg:py-2">
                        <div className="flex gap-x-3">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-lg border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/70 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="rounded-md max-w-md mx-auto font-semibold px-3.5 tracking-wide py-2.5 bg-black text-sm text-white shadow-sm"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter3;
