import Mconnect from '../components/asset/images/MMConnect.svg';
import Wconnect from '../components/asset/images/WConnect.svg';
import { ChevronRightIcon,XMarkIcon } from '@heroicons/react/24/outline';
// import ReactDOM from 'react-dom/client'

const Modal = ({open, onClose}) => {
  if(!open) return null
  // const portal = ReactDOM.createPortal(document.getElementById('portal'));
  
  return (
    // return portal(
    <div id='cont_modal'>
      <div id='modal' className='rounded-[10px] w-[40%] max-sm:w-[90%]'>
        <div className='flex justify-between p-[15px]'>
        <h3 className='font-[700] text-[18px]'>Connect Wallet</h3>
        <XMarkIcon onClick={onClose} className='w-5' />
        </div>
        <hr />
        <p className='font-[400] text-[16px] mt-[5px] ml-[5px]'>Choose your preferred wallet</p>
        <div className='p-[15px]'>
          <button className='w-[90%] rounded-[10px] flex p-[15px] border-[1px] border-solid border-[#000000] mb-[15px]'>
          <img src={Mconnect} alt={Mconnect} />
          <h4 className='font-[700] ml-[5px] text-[18px] pt-[5px]'>Metamask</h4>
          <ChevronRightIcon className='w-5 pt-[10px]' />
          </button>
          <button className='w-[90%] rounded-[10px] flex p-[15px] border-[1px] border-solid border-[#000000] mb-[7px]'>
          <img src={Wconnect} alt={Wconnect } />
          <h4 className='font-[700] ml-[5px] text-[18px] pt-[5px]'>WalletConnect</h4>
          <ChevronRightIcon className='w-5 pt-[10px]'/>
          </button>
        </div>
      </div>
    </div>

  )
}
 
export default Modal;


// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );