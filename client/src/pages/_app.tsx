import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import type { AppProps } from 'next/app';
import { RainbowKitProvider, darkTheme, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains(
    [goerli, ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli, polygonMumbai] : [])],
    [
        alchemyProvider({
            // This is Alchemy's default API key.
            // You can get your own at https://dashboard.alchemyapi.io
            apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
        }),
        publicProvider(),
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'Web 3 App',
    chains,
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                chains={chains}
                theme={darkTheme({
                    accentColor: '#77940F',
                })}
            >
                <Component {...pageProps} />
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
