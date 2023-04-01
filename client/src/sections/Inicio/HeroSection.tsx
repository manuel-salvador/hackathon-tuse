import Image from 'next/image';
import React from 'react';

import HeroImage from '/public/Hero.webp';

type Props = {};

export default function HeroSection({}: Props) {
    return (
        <section className="w-full h-screen flex items-center justify-center ">
            <Image
                src={HeroImage}
                alt="Hero image"
                fill={true}
                className="object-cover brightness-75 -z-10 rounded-b-[90%] shadow-2xl shadow-gray-900"
                priority
            />
            <p className="w-1/2 text-center text-4xl font-extrabold">NFTs de inversión compartida gobernada por una DAO</p>
        </section>
    );
}
