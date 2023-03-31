import Head from 'next/head';

import Header from '@/components/Header';

type Props = {
    title: string;
    children: JSX.Element | JSX.Element[];
    className?: string;
};

export default function PageLayout({ title, className, children }: Props) {
    const tabTitle = `InvestiDAO | ${title}`;
    return (
        <>
            <Head>
                <title>{tabTitle}</title>
                <meta name="description" content="InvestiDAO app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`w-full ${className || ''}`}>
                <Header />
                {children}
            </main>
        </>
    );
}
