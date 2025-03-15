import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config.ts'
import { Account } from './account.tsx'
import { WalletOptions } from './WalletConnector.tsx'
import { SwitchChain } from './SwitchChain.tsx'


const queryClient = new QueryClient()

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) {

    return (<><Account /></>)
  }
  return <WalletOptions />
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
      </QueryClientProvider>
      
    </WagmiProvider>


    

  )
}

export default App