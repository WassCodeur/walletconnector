import { useState, useEffect } from 'react';
import { useConnect, useSwitchChain } from 'wagmi';


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
            </div>
        
        </>

    )
}

export default WalletComponent;