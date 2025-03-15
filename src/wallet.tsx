
import ChainModal from './ChainModal.tsx';
import WalletComponent from './WalletComponent.tsx';
export interface WalletModalProps {
    isOpen: boolean;
    Close: () => void;

}



const WalletModal: React.FC<WalletModalProps> = ({ isOpen, Close }) => {


    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-header">
                <h2 className="modal-title">Connect your wallet</h2>
                <button className="close-button" onClick={Close}>X</button>
            </div>
            <p className="modal-description">Select what network and wallet your want to connect below</p>

            <div className="terms-section">
                <div className="terms-text">
                    <div>Accept <a href="#" className="terms-links">Terms of Service</a> and <a href="#" className="terms-links">Privacy Policy</a></div>
                </div>
                <label className="terms-label">
                    <input type="checkbox" className="terms-checkbox" checked />
                    <span>I read and accept</span>
                </label>
            </div>


            <ChainModal></ChainModal>
            <WalletComponent></WalletComponent>
        </div>




    )
}

export default WalletModal;
