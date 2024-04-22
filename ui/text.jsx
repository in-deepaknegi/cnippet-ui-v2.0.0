"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import Hero1 from "@/public/images/profile/profile3.jpg";
import Hero2 from "@/public/images/profile/profile5.jpg";
import Hero3 from "@/public/images/profile/profile2.jpg";

const feedbacks = [
    {
        name: "Judith Black 1",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        social: "@judithblack",
        image: Hero1,
    },
    {
        name: "Judith Black 2",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolor.sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat.",
        social: "@judithblack",
        image: Hero2,
    },
    {
        name: "Judith Black 3",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        social: "@judithblack",
        image: Hero3,
    },
];

const Feedback4 = () => {
    const data = [...feedbacks, ...feedbacks, ...feedbacks];

    return (
        <>
            <section className="relative isolate py-16 md:py-24">
                <div className="mx-auto gap-4">
                    <div className="flex flex-row gap-8">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={true}
                            autoplay={{
                                delay: 0,
                                // disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={5000}
                            breakpoints={{
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {data.map((feed, i) => (
                                <SwiperSlide key={i} className="py-10">
                                    <div className="my-auto h-full rounded-2xl bg-black/95 p-3 shadow-lg">
                                        <div className="my-4 flex flex-col items-center justify-between gap-6">
                                            <blockquote className="text-center text-xl font-light text-white sm:text-xl sm:leading-7">
                                                <p>{feed.para}</p>
                                            </blockquote>

                                            <figcaption className="mx-auto mt-4 flex justify-center">
                                                <Image
                                                    src={feed.image}
                                                    alt="profile-1"
                                                    className="h-12 w-12 rounded-full object-cover"
                                                />
                                                <div className="ml-5">
                                                    <div className="text-lg font-semibold text-white">
                                                        {feed.name}
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="text-sm font-semibold tracking-wide text-blue-500"
                                                    >
                                                        {feed.social}
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Feedback4;
