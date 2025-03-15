import {  useSwitchChain } from 'wagmi';


const ChainModal = () => {
    const { chains, switchChain } = useSwitchChain()

    return (
        <>

            <h3 className="section-title">Supported Network</h3>
            <div className="network-options">
                {
                    chains.map((chain) => (
                        <button className="option-card" onClick={() => { switchChain({ chainId: chain.id }); }}>
                            <img src={`/public/${chain.name}.svg`} alt={chain.name} className="option-icon" />
                            <div className="option-name">{chain.name}</div>
                        </button>
                    ))
                }
            </div>

        </>

    )
}

export default ChainModal;