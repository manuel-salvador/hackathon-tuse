import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Header from '@/components/header';

export default function Home() {
    return (
        <>
            <Head>
                <title>InvestiDAO</title>
                <meta name="description" content="InvestiDAO app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="min-h-screen w-screen flex flex-col justify-center items-center gap-8">
                <h1>Ready to code</h1>
                <ConnectButton />
            </main>
        </>
    );
}
