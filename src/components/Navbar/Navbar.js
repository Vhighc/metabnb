import React, {useState} from 'react';
import Modal from '../Modal';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HIcon from '../asset/images/metaIcon.svg';
import MbIcon from '../asset/images/bnbIcon.svg';



const Navbar = () => {

    const [nav, setNav] = useState(false)
   
    const [openModal, setOpenModal] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className=' '>
      <div className='mx-[5%] mt-[2.5%] justify-between flex mb-[7%]'>
          <div className='flex'>
          <img className='h-[36.37px] w-[41.99px] relative top-2' src={HIcon} alt={HIcon} />
          <img className='h-[32.19px] w-[188.1px] relative top-3' src={MbIcon} alt={MbIcon} />
          </div>
          <ul className='flex max-lg:hidden'>
          <li className='text-[#434343] font-normal text-[20px]'><a href="/">Home</a></li>
          <li className='text-[#434343] font-normal text-[20px]'><a href="/nfts">Place to stay</a></li>
          <li className='text-[#434343] font-normal text-[20px]'><a href="/nfts">NFTs</a></li>
          <li className='text-[#434343] font-normal text-[20px]'><a href="/nfts">Community</a></li>
          </ul>
        <div className='max-lg:hidden'>
         <button onClick={() => setOpenModal(true)} className='bg-[#A02279] relative top-1 w-[170px] h-[48px] rounded-[10px] border-hidden text-[#FFFFFF] text-[16px] font-normal max-md:hidden'>Connect wallet</button>       
        {/* <div className='md:hidden mr-4' onClick={handleClick}> */}
        </div>
        <div className='hidden mr-4 max-[768px]:flex' onClick={handleClick}>
          {!nav ? <Bars3Icon className='w-5' /> : <XMarkIcon className='w-5' />}          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'><a href="/">Home</a></li>
          <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'><a href="/nfts">Place to stay</a></li>
          <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'><a href="/nfts">NFTs</a></li>
          <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'><a href="/nfts">Community</a></li>
        <div className=''>
            <button onClick={() => setOpenModal(true)} className='bg-[#A02279]  px-8 py-3 text-[#FFFFFF] text-[16px] font-normal rounded-[10px]'>Connect wallet</button>
        </div>
      </ul>
      <Modal open={openModal} onClose={() => setOpenModal(false)}  />
    </div>
  );
};

export default Navbar;




// import React, {useState} from 'react';
// import Scroll from "react-scroll";
// import { Link } from 'react-router-dom';
// import HIcon from '../asset/images/metaIcon.svg';
// import MbIcon from '../asset/images/bnbIcon.svg';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// const ScrollLink = Scroll.Link;

// const Navbar = () => {

//     const [nav, setNav] = useState(false)
//     const handleClick = () => setNav(!nav)

//     const handleClose =()=> setNav(!nav)

//   return (
//     <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
//       <div className='px-2 flex justify-between items-center w-full h-full'>
//         <div className='flex items-center'>
//           <img src={HIcon} alt={HIcon} />
//           <img src={MbIcon} alt={MbIcon} />
//           <ul className='hidden md:flex'>
//           <li><ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink></li>
//           <li><ScrollLink to="places" smooth={true} offset={-200} duration={500}>Place to stay</ScrollLink></li>
//           <li><ScrollLink to="nfts" smooth={true} offset={-50} duration={500}>NFTs</ScrollLink></li>
//           <li><ScrollLink to="community" smooth={true} offset={-100} duration={500}>Community</ScrollLink></li>
//           </ul>
//         </div>
//         <div className='hidden md:flex pr-4'>
//           <Link to='/auth'><button className='px-8 py-3'>Get Started</button></Link>
//         </div>
//         <div className='md:hidden mr-4' onClick={handleClick}>
//           {!nav ? <Bars3Icon className='w-5' /> : <XMarkIcon className='w-5' />}          
//         </div>
//       </div>

//       <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
//           <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="hero" smooth={true} duration={500}>Home</Link></li>
//           <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="places" smooth={true} offset={-200} duration={500}>Place to stay</Link></li>
//           <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="nfts" smooth={true} offset={-50} duration={500}>NFTs</Link></li>
//           <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="community" smooth={true} offset={-100} duration={500}>Community</Link></li>
//         <div className='flex flex-col my-4'>
//             <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
//             <button className='px-8 py-3'>Sign Up</button>
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

