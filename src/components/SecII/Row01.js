import img001 from "../asset/images/MBLPImg01.svg";
import img002 from "../asset/images/MBLPImg02.svg";
import img003 from "../asset/images/MBLPImg03.svg";
import img004 from "../asset/images/MBLPImg04.svg";
import Star from "../asset/images/Star.svg";

const Row01 = () => {
  return (
    <div>
      <div className="mx-[5%] border-2 border-solid border-[red]">
        <div className="w-[98.5%] flex border-2 border-solid border-[green] justify-between">
          <div className="rounded-[15px] border-2 border-solid border-[orange]">
            <div className='p-[7px]'>
              <img src={img001} alt={img001} />
              <div className='flex border-2 border-solid border-[blue]'>
                <div className='border-2 border-solid border-[pink]'>
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
                <div className="">
                  <p className='text-left text-[12px] text-[#434343] font-[700]'>1MBT per night</p>
                  <p className='text-left text-[12px] text-[#434343] font-[400]'>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={img002} alt={img002} />
          </div>
          <div>
            <img src={img003} alt={img003} />
          </div>
          <div>
            <img src={img004} alt={img004} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row01;
