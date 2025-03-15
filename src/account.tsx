import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { SwitchChain } from './SwitchChain'




export function Account() {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

    console.log(ensAvatar)
    console.log(ensName)
    return (
        <div>
            <header>
                <div className="header-container">
                    <div className="header-content">
                        <h1>Account</h1>
                        <p>Connected with: {address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : 'N/A'}</p>

                    </div>

                    <div className="user-avatar">
                        <img src="src/assets/ens-avatar.png" />
                    </div>


                </div>
            </header>
            <main>
                <div><SwitchChain></SwitchChain></div>
                <div className="btn">
                    <button onClick={() => disconnect()}>Disconnect</button>
                </div>
            </main>
        </div>
    )
}