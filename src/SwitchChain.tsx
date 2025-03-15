import { useState } from 'react'
import { useSwitchChain } from 'wagmi'
import ChainsComponent from './chainsComponent'


function SwitchChain() {
  
   

    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)


    return (
        <div>
            {isOpen ? <ChainsComponent isOpen={isOpen} Close={closeModal} /> : <button onClick={openModal}>Switch Chain </button>}
        </div>
    )
}

export { SwitchChain }