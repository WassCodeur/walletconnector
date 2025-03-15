import  { useState, useRef, useEffect } from 'react';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { SwitchChain } from './SwitchChain';

export function Account() {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address });
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  
    const formatAddress = (addr?: string) => {
        if (!addr) return 'N/A';
        return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header>
                <div className="header-container">
                    <div className="header-content">
                        <h1>Account</h1>
                        <p>Connected with: {formatAddress(address)}</p>
                    </div>

                    <div className="avatar-container" ref={dropdownRef}>
                        <div className="avatar" onClick={toggleDropdown}>
                            <img src={ensAvatar || "/ens-avatar.png"} alt="User avatar" />
                        </div>
                        <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                            <div className="user-info">
                                <div className="user-name">{ensName || 'User'}</div>
                                <div className="user-address">{formatAddress(address)}</div>
                            </div>

                            <div className="menu-item" >
                                My Profile
                            </div>

                            <div className="divider"></div>

                            <div className="menu-item switch-chain-item">
                                
                                <div className="switch-chain-content">
                                    <SwitchChain />
                                </div>
                            </div>

                            <div className="divider"></div>

                            <div className="menu-item disconnect-item" onClick={() => { disconnect(); alert('Disconnected'); }}>
                                Disconnect
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
}