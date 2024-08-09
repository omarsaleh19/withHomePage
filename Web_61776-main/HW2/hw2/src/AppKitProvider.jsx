import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider ,useAccount } from 'wagmi'
import { mainnet ,bsc  } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


//      WalletConnect Confirguration
// 0. Setup queryClient
const queryClient = new QueryClient()
// 1. Get projectId from https://cloud.walletconnect.com
const projectId = '3bc485fc6392a8539e456890061ed1c9'
// 2. Create wagmiConfig
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'http://localhost:5173',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const chains = [mainnet, bsc];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})
// 3. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})
export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
//      End - WalletConnect Confirguration