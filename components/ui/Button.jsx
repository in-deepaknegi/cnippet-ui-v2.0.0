import React from 'react'
import Link from 'next/link'

const Button = ({ text, color, url }) => {

    let bg = 'bg-dusk-900';
    let hbg = 'hover:bg-dusk-800';

    return (
        <button>
            <Link
                className={`rounded-md max-w-md mx-auto font-semibold px-3.5 tracking-wide py-2.5 text-sm text-white shadow-sm ${hbg} ${bg}`}
                href={`${url}`}
            >
                {text}
            </Link>
        </button>
    )
}

export default Button