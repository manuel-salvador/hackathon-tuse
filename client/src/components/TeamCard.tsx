import Image from 'next/image';

import { GitHubIcon } from './Icons';

import ManuProfile from '/public/team/manu.jpg';

type Props = {};

export default function TeamCard({}: Props) {
    return (
        <div className="w-[280px] min-h-[400px] flex flex-col bg-secondary">
            <figure className="w-full h-[280px] relative">
                <Image src={ManuProfile} alt="asd" fill className="object-cover" />
            </figure>
            <div className="flex flex-col justify-center items-center flex-1 gap-2 p-3">
                <p className="font-bold">Manu S.</p>
                <p>Full Stack web Developer</p>
                <a href="#">
                    <GitHubIcon size={30} color="white" />
                </a>
            </div>
        </div>
    );
}
