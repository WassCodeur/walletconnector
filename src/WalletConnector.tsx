import { useState } from 'react'
import WalletModal from './wallet.tsx'




export function WalletConnector() {

    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)


    return (
        <div>

            <header>
                <div className="header-container">
                    <div className="header-content">
                        <h1>Wallet Connector</h1>
                        <p>Connect your wallet to get started</p>
                    </div>
                    <div className="btn">
                        {isOpen ? <WalletModal isOpen={isOpen} Close={closeModal} /> : <button onClick={openModal}>Connect Wallet</button>}
                    </div>
                </div>
            </header>
        </div>
    )
}
