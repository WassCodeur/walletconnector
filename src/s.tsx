import React, { useState } from 'react';

// Types
type NetworkType = 'Ethereum' | 'Binance Chain' | 'Polygon';

interface WalletState {
    connected: boolean;
    address: string | null;
    network: NetworkType | null;
}

const SimpleCryptoPage: React.FC = () => {
    // État pour gérer les informations du portefeuille
    const [wallet, setWallet] = useState<WalletState>({
        connected: false,
        address: null,
        network: null
    });

    // État pour la modal
    const [showModal, setShowModal] = useState(false);

    // État pour afficher/cacher l'adresse complète
    const [showFullAddress, setShowFullAddress] = useState(false);

    // Réseaux disponibles
    const networks: NetworkType[] = ['Ethereum', 'Binance Chain', 'Polygon'];

    // Simuler la connexion du portefeuille
    const connectWallet = (network: NetworkType) => {
        // Générer une adresse aléatoire pour simuler
        const mockAddress = '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');

        setWallet({
            connected: true,
            address: mockAddress,
            network: network
        });

        setShowModal(false);
    };

    // Déconnecter le portefeuille
    const disconnectWallet = () => {
        setWallet({
            connected: false,
            address: null,
            network: null
        });
        setShowFullAddress(false);
    };

    // Formater l'adresse pour l'affichage
    const formatAddress = (address: string): string => {
        if (!address) return '';
        return showFullAddress ? address : `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    };

    // Changer de réseau
    const switchNetwork = (network: NetworkType) => {
        setWallet({
            ...wallet,
            network: network
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-xl font-bold text-center mb-6">Simple Crypto App</h1>

                {wallet.connected ? (
                    <div className="space-y-4">
                        <div className="flex justify-center space-x-3">
                            {networks.map((network) => (
                                <button
                                    key={network}
                                    onClick={() => switchNetwork(network)}
                                    className={`px-3 py-1 rounded-full text-sm ${wallet.network === network
                                            ? 'bg-blue-100 text-blue-800 border border-blue-300'
                                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                >
                                    {network}
                                </button>
                            ))}
                        </div>

                        {/* Affichage de l'adresse */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex-1 truncate">
                                <span className="text-sm text-gray-500 mr-2">Address:</span>
                                <span className="font-mono">{formatAddress(wallet.address || '')}</span>
                            </div>
                            <button
                                onClick={() => setShowFullAddress(!showFullAddress)}
                                className="ml-2 text-blue-600 text-sm hover:text-blue-800"
                            >
                                {showFullAddress ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        {/* Bouton de déconnexion */}
                        <button
                            onClick={disconnectWallet}
                            className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Disconnect
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setShowModal(true)}
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Connect Wallet
                    </button>
                )}
            </div>

           
        </div>
    );
};

export default SimpleCryptoPage;