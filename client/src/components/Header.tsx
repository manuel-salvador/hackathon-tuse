import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
    return (
        <header className="flex justify-between items-center w-full max-w-[1200px] mx-auto py-4 fixed backdrop-blur-sm  z-10">
            <p className="text-xl font-bold">InvestiDAO</p>
            <div className="flex items-center gap-8">
                <nav>
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/como-funciona">Cómo funciona</Link>
                        </li>
                        <li>
                            <Link href="/sobre-nosotros">Sobre nosotros</Link>
                        </li>
                    </ul>
                </nav>
                <ConnectButton label="Conectar Wallet" />
            </div>
        </header>
    );
}
