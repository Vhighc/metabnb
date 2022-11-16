import { row1Data } from "../Constant/row1Data";
import Row2 from './Row02';

const Row01 = ({nfts}) => {
  return (
    <div>
 <div  className="mx-[5%] mb-[1%]">
            <div className="w-[98.5%] flex justify-between flex-wrap">
      {row1Data.map((item) => (
            <div key={item.id} className="rounded-[15px] border-[1px] border-solid border-[#D7D7D7]">
            <div className='p-[10px]'>
              <img className='mb-[2%]' src={item.image} alt={item.image} />
              <div className='flex'>
                <div className='basis-[38%]'>
                  <p className='text-[12px] text-[#434343] font-[400] mb-[2%]'>{item.name}</p>
                  <p className='text-[12px] text-[#434343] font-[400] mt-[7px]'>{item.distance}</p>
                  <div className='flex justify-between mt-[8px]'>
                    <img className='w-[12px]' src={item.rating} alt={item.rating} />
                    <img className='w-[12px]' src={item.rating} alt={item.rating} />
                    <img className='w-[12px]' src={item.rating} alt={item.rating} />
                    <img className='w-[12px]' src={item.rating} alt={item.rating} />
                    <img className='w-[12px]' src={item.rating} alt={item.rating} />
                  </div>
                </div>
                <div className="basis-[62%]">
                  <p className='text-end  text-[12px] text-[#434343] font-[700]'>{item.token}</p>
                  <p className='text-end  text-[12px] text-[#434343] font-[400] mt-[7px]'>{item.duration}</p>
                </div>
              </div>
            </div>
          </div>
           ))}
            </div>
        </div> 
      <Row2 nfts={nfts} />
    </div>
  );
};

export default Row01;
