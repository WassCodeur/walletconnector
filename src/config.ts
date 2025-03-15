import { http, createConfig, injected } from 'wagmi'
import {
    base, mainnet, polygon, lisk

} from 'wagmi/chains'


export const config = createConfig({
    chains: [mainnet, base, polygon, lisk],
    connectors: [],

    transports: {
        [polygon.id]: http(),
        [lisk.id]: http(),
        [mainnet.id]: http(),
        [base.id]: http(),
        
        
    },
})

function WalletConnect(arg0: { projectId: any }): any {
    throw new Error('Function not implemented.')
}
