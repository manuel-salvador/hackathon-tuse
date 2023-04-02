import Image from 'next/image';

import { GitHubIcon } from './Icons';

type Props = {
  src: any;
  name: string;
  github: string;
};

export default function TeamCard({ src, name, github }: Props) {
  return (
    <div className="w-[280px] min-h-[400px] flex flex-col bg-secondary">
      <figure className="w-full h-[280px] relative">
        <Image src={src} alt="asd" fill className="object-cover" />
      </figure>
      <div className="flex flex-col justify-center items-center flex-1 gap-2 p-3">
        <p className="font-bold">{name}</p>
        <p>Full Stack web Developer</p>
        <a href={`www.github.com/${github}`}>
          <GitHubIcon size={30} color="white" />
        </a>
      </div>
    </div>
  );
}
