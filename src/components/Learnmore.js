import LearnImg from "../components/asset/images/learnMoreImg.svg";

const Learnmore = () => {
  return (
    <div id="bgImg" className='border-[1px] border-solid border-[#000000] px-[5%] py-[4%]'>
      <div className='flex border-[1px] border-solid border-[yellow]'>
        <div className='basis-[40%] flex border-[1px] border-solid border-[red]'>
          <div>
            <h1 className="text-[#FFFFFF] text-[48px] font-[700]">
              Metabnb NFTs
            </h1>
            <p className="text-[#FFFFFF] text-[18px] leading-[35px] font-[400]">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className='bg-[#FFFFFF]'>learn more</button>
            {/* <button className=' w-[156px] h-[48px] text-[16px] font-[400] text-[#A02279]'>learn more</button> */}
          </div>
        </div>
        <div  className='basis-[60%] flex border-[1px] border-solid border-[green]'>
            <div><img  src={LearnImg} alt={LearnImg} /></div> 
        </div>
      </div>
    </div>
  );
};

export default Learnmore;
