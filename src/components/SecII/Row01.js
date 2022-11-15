import img001 from "../asset/images/MBLPImg01.svg";
import img002 from "../asset/images/MBLPImg02.svg";
import img003 from "../asset/images/MBLPImg03.svg";
import img004 from "../asset/images/MBLPImg04.svg";
import Star from "../asset/images/Star.svg";
import Row2 from './Row02';

const Row01 = ({nfts}) => {
  return (
    <div>
      <div className="mx-[5%] border-2 border-solid border-[red]">
        <div className="w-[98.5%] flex border-2 border-solid border-[green] justify-between">
          <div className="rounded-[15px] border-[1px] border-solid border-[#D7D7D7]">
            <div className='p-[7px]'>
              <img className='mb-[3%]' src={img001} alt={img001} />
              <div className='flex border-2 border-solid border-[blue]'>
                <div className='border-2 border-solid border-[pink] basis-[38%]'>
                  <p className='text-[12px] text-[#434343] font-[400] mb-[2%]'>Desert King</p>
                  <p className='text-[12px] text-[#434343] font-[400]'>2345km away</p>
                  <div className='flex justify-between mt-[3%]'>
                    <img className='w-[12px]' src={Star} alt={Star} />
                    <img className='w-[12px]' src={Star} alt={Star} />
                    <img className='w-[12px]' src={Star} alt={Star} />
                    <img className='w-[12px]' src={Star} alt={Star} />
                    <img className='w-[12px]' src={Star} alt={Star} />
                  </div>
                </div>
                <div className=" border-2 border-solid border-[purple] basis-[60%]">
                  <p className='text-end  text-[12px] text-[#434343] font-[700]'>1MBT per night</p>
                  <p className='text-end  text-[12px] text-[#434343] font-[400]'>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[15px] border-[1px] border-solid border-[#D7D7D7]">
            <div className='p-[7px]'>
              <img src={img002} alt={img002} />
              <div className='flex border-2 border-solid border-[blue]'>
                <div className='border-2 border-solid border-[pink] basis-[40%]'>
                  <p className='text-[12px] text-[#434343] font-[400]'>Desert King</p>
                  <p className='text-[12px] text-[#434343] font-[400]'>2345km away</p>
                  <div className='flex'>
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                  </div>
                </div>
                <div className="basis-[60%]">
                  <p className='text-end text-[12px] text-[#434343] font-[700]'>1MBT per night</p>
                  <p className='text-end text-[12px] text-[#434343] font-[400]'>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[15px] border-[1px] border-solid border-[#D7D7D7]">
            <div className='p-[7px]'>
              <img src={img003} alt={img003} />
              <div className='flex border-2 border-solid border-[blue]'>
                <div className='border-2 border-solid border-[pink] basis-[40%]'>
                  <p className='text-[12px] text-[#434343] font-[400]'>Desert King</p>
                  <p className='text-[12px] text-[#434343] font-[400]'>2345km away</p>
                  <div className='flex'>
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                  </div>
                </div>
                <div className="basis-[60%]">
                  <p className='text-end text-[12px] text-[#434343] font-[700]'>1MBT per night</p>
                  <p className='text-center text-[12px] text-[#434343] font-[400]'>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[15px] border-[1px] border-solid border-[#D7D7D7]">
            <div className='p-[7px]'>
              <img src={img004} alt={img004} />
              <div className='flex border-2 border-solid border-[blue]'>
                <div className='border-2 border-solid border-[pink] basis-[40%]'>
                  <p className='text-[12px] text-[#434343] font-[400]'>Desert King</p>
                  <p className='text-[12px] text-[#434343] font-[400]'>2345km away</p>
                  <div className='flex'>
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                  </div>
                </div>
                <div className="basis-[60%]">
                  <p className='text-end text-[12px] text-[#434343] font-[700]'>1MBT per night</p>
                  <p className='text-center text-[12px] text-[#434343] font-[400]'>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row2 nfts={nfts} />
    </div>
  );
};

export default Row01;
