import React from 'react'
import Image from 'next/image'
import Hero1 from '@/public/images/hero/hero9.jpg'
import Hero2 from '@/public/images/hero/hero5.jpg'
import Hero3 from '@/public/images/hero/hero6.jpg'

const features = [
    {
        id: 1,
        title: "Push to deploy",
        image: Hero1,
        para: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
        href: "#",
    },
    {
        id: 2,
        title: "SSL certificates",
        image: Hero2,
        para: "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
        href: "#",
    },
    {
        id: 3,
        title: "Simple queues",
        image: Hero3,
        para: "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
        href: "#",
    },
]

const List3 = () => {
    return (
        <section className='bg-white py-24 sm:py-28'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='text-base font-semibold leading-7 text-blue-700'>
                        Deploy faster
                    </h2>
                    <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        Everything you need to deploy your app
                    </p>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
                    <dl className='mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
                        {features.map((feature) => (
                            <div key={feature.id} className='flex flex-col md:p-3'>
                                <dt className='flex flex-col gap-y-5 text-xl font-semibold leading-7'>
                                    <a
                                        href={feature.href}
                                        className="relative overflow-hidden rounded-2xl">
                                        <Image
                                            src={feature.image}
                                            alt="post-img"
                                            className="aspect-video w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2] hover:scale-110 transform ease-in-out duration-300"
                                        />
                                    </a>
                                    {feature.title}
                                </dt>
                                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                                    <p className='flex-auto'>
                                        {feature.para}
                                    </p>
                                    <p className='mt-6'>
                                        <a href={feature.href} className='text-sm font-semibold leading-6 text-blue-600'>
                                            Learn more
                                            <span> →</span>
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default List3