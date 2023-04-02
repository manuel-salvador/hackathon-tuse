import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="w-full fixed top-0 py-4 backdrop-blur-sm backdrop-brightness-75 z-10">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto ">
        <p className="text-xl font-bold">Tuse</p>
        <div className="flex items-center gap-8">
          <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-white-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
              </div>
            </div>
          </nav>
          <ConnectButton label="Conectar Wallet" />
        </div>
      </div>
    </header>
  );
}
