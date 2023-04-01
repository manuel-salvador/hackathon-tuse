import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full fixed top-0 py-4 backdrop-blur-sm backdrop-brightness-75 z-10"
        >
            <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto ">
                <p className="text-xl font-bold">Tuse</p>
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
                                <Link href="/mint">Mint NFT</Link>
                            </li>
                            <li>
                                <Link href="/sobre-nosotros">Sobre nosotros</Link>
                            </li>
                        </ul>
                    </nav>
                    <ConnectButton label="Conectar Wallet" />
                </div>
            </div>
        </motion.header>
    );
}
