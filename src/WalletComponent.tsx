import { useConnect } from 'wagmi';


const WalletComponent = () => {
    const { connect, connectors, error } = useConnect();

    return (
        <>
            <h3 className="section-title">Choose Wallet to connect</h3>
            <div className="wallet-options">
                {
                    connectors.map((connector) => (
                        <button className="option-card" onClick={() => { connect({ connector }) }}>
                            <img src={connector.icon} alt={connector.name} className="option-icon" />
                            <div className="option-name">{connector.name}</div>
                        </button>
                    ))
                }
                {error && <p>{error.message}</p>}
            </div>

        </>

    )
}

export default WalletComponent;