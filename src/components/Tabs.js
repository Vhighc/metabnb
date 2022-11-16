import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const Tabs = () => {
  return (
    <div>
        <div className='mx-[5%] mb-[4%]'>
        <div className='w-[95%] flex justify-between'>
            <p className='text-[20px] font-[400] text-[#434343]'>Resturant</p>
            <p className='text-[20px] font-[400] text-[#434343]'>Cottage</p>
            <p className='text-[20px] font-[400] text-[#434343]'>Castle</p>
            <p className='text-[20px] font-[400] text-[#434343]'>Fantast city</p>
            <p className='text-[20px] font-[400] text-[#434343]'>Beach</p>
            <p className='text-[20px] font-[400] text-[#434343]'>Carbins</p>
            <p className='text-[20px] font-[400] text-[#434343]'>Off-grid</p>
            <p className='text-[20px] font-[400] text-[#434343]'>Farm</p>
            <div  className='pt-[10px] px-[10px] w-[161px] rounded-[8px] h-[48px] border-[1px] border-[#B4B4B4] border-solid'>
                <div className='flex justify-between'>
                <p className='text-[16px] font-[400] text-[#434343]'>Location</p>
                <AdjustmentsHorizontalIcon className='w-5'/>
                </div>
            </div>     
        </div>
        </div>
    </div>
  )
}

export default Tabs;