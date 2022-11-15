

const Row02 = ({nfts}) => {
  return (
    <div className="">
          <div  className="mx-[5%] border-2 border-solid border-[red]">
            <div className="w-[98.5%] flex border-2 border-solid border-[green] justify-between">
      {nfts.map((nft) => (
            <div key={nft.id} className="rounded-[15px] border-[1px] border-solid border-[#D7D7D7]">
            <div className='p-[7px]'>
              <img className='mb-[3%]' src={nft.image} alt={nft.image} />
              <div className='flex border-2 border-solid border-[blue]'>
                <div className='border-2 border-solid border-[pink] basis-[40%]'>
                  <p className='text-[12px] text-[#434343] font-[400] mb-[2%]'>{nft.name}</p>
                  <p className='text-[12px] text-[#434343] font-[400]'>{nft.distance}</p>
                  <div className='flex justify-between mt-[3%]'>
                    <img className='w-[12px]' src={nft.rating} alt={nft.rating} />
                    <img className='w-[12px]' src={nft.rating} alt={nft.rating} />
                    <img className='w-[12px]' src={nft.rating} alt={nft.rating} />
                    <img className='w-[12px]' src={nft.rating} alt={nft.rating} />
                    <img className='w-[12px]' src={nft.rating} alt={nft.rating} />
                  </div>
                </div>
                <div className=" border-2 border-solid border-[purple] basis-[60%]">
                  <p className='text-end  text-[12px] text-[#434343] font-[700]'>{nft.token}</p>
                  <p className='text-end  text-[12px] text-[#434343] font-[400]'>{nft.duration}</p>
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
