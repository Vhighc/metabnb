import Mconnect from '../components/asset/images/MMConnect.svg';
import Wconnect from '../components/asset/images/WConnect.svg';
import { ChevronRightIcon,XMarkIcon } from '@heroicons/react/24/outline';

const Modal = ({open, onClose}) => {
  if(!open) return null
  return (
    <div id='modal'>
      <div className='w-[40%] mx-[auto]'>
        <div className='flex'>
        <h3>Connect Wallet</h3>
        <XMarkIcon onClick={onClose} className='w-5' />
        </div>
        <hr />
        <p>Choose your preferred wallet</p>
        <div>
          <button className='flex'>
          <img src={Mconnect} alt={Mconnect} />
          <h4>Metamask</h4>
          <ChevronRightIcon className='w-5' />
          </button>
          <button className='flex'>
          <img src={Wconnect} alt={Wconnect } />
          <h4>WalletConnect</h4>
          <ChevronRightIcon className='w-5' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;