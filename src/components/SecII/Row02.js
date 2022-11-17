

const Row02 = ({nfts}) => {
  return (
    <div className="">
          <div  className="mx-[5%]">
          {/* <div  className="mx-[5%] border-2 border-solid border-[red]"> */}
            <div className="w-[98.5%] flex justify-between flex-wrap max-sm:justify-center">
            {/* <div className="w-[98.5%] flex border-2 border-solid border-[green] justify-between"> */}
      {nfts.map((nft) => (
            <div key={nft.id} className="max-[768px]:mb-[2%] rounded-[15px] border-[1px] border-solid border-[#D7D7D7]">
            <div className='p-[10px]'>
              <img className='mb-[2%]' src={nft.image} alt={nft.image} />
              <div className='flex'>
              {/* <div className='flex border-2 border-solid border-[blue]'> */}
                <div className='basis-[38%]'>
                {/* <div className='border-2 border-solid border-[pink] basis-[38%]'> */}
                  <p className='text-[12px] text-[#434343] font-[400] mb-[2%]'>{nft.name}</p>
                  <p className='text-[12px] text-[#434343] font-[400] mt-[7px]'>{nft.distance}</p>
                  <div className='flex justify-between mt-[8px]'>
                    <img className='w-[12px]' src={nft.rating} alt={nft.rating} />
                    <img className='w-[12px]' src={nft.rating} alt={nft.rating} />
                    <img className='w-[12px]' src={nft.rating} alt={nft.rating} />
                    <img className='w-[12px]' src={nft.rating} alt={nft.rating} />
                    <img className='w-[12px]' src={nft.rating} alt={nft.rating} />
                  </div>
                </div>
                <div className="basis-[62%]">
                {/* <div className=" border-2 border-solid border-[purple] basis-[62%]"> */}
                  <p className='text-end  text-[12px] text-[#434343] font-[700]'>{nft.token}</p>
                  <p className='text-end  text-[12px] text-[#434343] font-[400] mt-[7px]'>{nft.duration}</p>
                </div>
              </div>
            </div>
          </div>
           ))}
            </div>
        </div> 
    </div>
  );
};

export default Row02;
