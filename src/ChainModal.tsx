import {  useSwitchChain } from 'wagmi';
import { useAccount } from 'wagmi'


const ChainModal = () => {
    const { chains, switchChain } = useSwitchChain()
    const { isConnected } = useAccount()

    return (
        <>

            <h3 className="section-title">Supported Network</h3>
            <div className="network-options">
                {
                    
                    chains.map((chain) => (
                        <button className="option-card" onClick={() => { 
                            if (isConnected) {
                                switchChain({ chainId: chain.id });
                                alert('Switched to ' + chain.name);
                                

                            }
                        }}>
                            <img src={`/${chain.name}.svg`} alt={chain.name} className="option-icon" />
                            <div className="option-name">{chain.name}</div>
                        </button>
                    ))
                }
            </div>

        </>

    )
}

export default ChainModal;