import LearnImg from "../components/asset/images/learnMoreImg.svg";

const Learnmore = () => {
  return (
    <div id="bgImg" className='border-[1px] border-solid border-[#000000] px-[5%] py-[4%]'>
      <div className='flex justify-between max-[768px]:block flex-wrap'>
      {/* <div className='flex justify-between border-[1px] border-solid border-[yellow]'> */}
        <div className='basis-[38%] flex'>
        {/* <div className='basis-[38%] flex border-[1px] border-solid border-[red]'> */}
          <div className='mt-[80px] max-[768px]:mt-[20px]'>
            <h1 className="text-[#FFFFFF] text-[48px] font-[700] max-[768px]:text-[30px]">
              Metabnb NFTs
            </h1>
            <p className="mt-[30px] max-[768px]:mt-[20px]  text-[#FFFFFF] text-[18px] leading-[35px] font-[400]">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className='bg-white text-[16px] font-[400] text-[#A02279] w-[156px] h-[48px] rounded-[8px] mt-[40px] max-[768px]:mt-[20px]'>learn more</button>
            {/* <button className='bg-white text-[16px] font-[400] text-[#A02279] w-[156px] h-[48px] rounded-[8px] mt-[40px] border-[1px] border-solid border-[green]'>learn more</button> */}
          </div>
        </div>
        <div  className='basis-[58%] flex max-[768px]:w-[100%] max-[768px]:mx-[auto] max-[768px]:mt-[30px]'>
        {/* <div  className='text-end basis-[58%] flex border-[1px] border-solid border-[green]'> */}
            <div><img className='max-[768px]:w-[300px]' src={LearnImg} alt={LearnImg} /></div> 
        </div>
      </div>
    </div>
  );
};

export default Learnmore;
