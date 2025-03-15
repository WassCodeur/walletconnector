import { useEffect, useState } from 'react'
import { Connector, useConnect } from 'wagmi'
import WalletModal from './wallet.tsx'
import SimpleCryptoPage from './s.tsx'




export function WalletOptions() {

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
                        {isOpen ? <WalletModal isOpen={isOpen} Close={closeModal} WalletOption={WalletOption} /> : <button onClick={openModal}>Connect Wallet</button>}
                    </div>
                </div>
            </header>
        </div>
    )
}



function WalletOption({
    connector,
    onClick,
}: {
    connector: Connector
    onClick: () => void
}) {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        ; (async () => {
            const provider = await connector.getProvider()
            setReady(!!provider)
        })()
    }, [connector])

    return (
        <button disabled={!ready} onClick={onClick}>
            {`${connector.name}`}
        </button>
    )
}