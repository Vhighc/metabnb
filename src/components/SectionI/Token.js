import token1 from '../asset/images/mbToken.svg';
import token2 from '../asset/images/metaMask.svg';
import meta2 from '../asset/images/metaMask02.svg';
import token3 from '../asset/images/openSea.svg';


const Token = () => {
  return (
    <div id="bgImg">
      <div className=" w-[80%] mx-[auto] justify-between flex">
      {/* <div className=" w-[80%] mx-[auto] justify-between flex border-2 border-solid border-[yellow]"> */}
        <div className='flex'>
        {/* <div className='flex border-2 border-solid border-[red]'> */}
            <img className='w-[50px]' src={token1} alt={token1} />
            <h1 className='text-[40px]  text-[#F7F7F7] font-[700]'>MBToken</h1>
        </div>
        <div className='flex'>
        {/* <div className='flex border-2 border-solid border-[green]'> */}
            <img className='w-[37px]' src={token2} alt={token2} />
            <img className='w-[164px]' src={meta2} alt={meta2} />
        </div>
        <div className='pr-[1%] flex'>
        {/* <div className='pr-[1%] flex border-2 border-solid border-[yellow]'> */}
            <img className='w-[38px]' src={token3} alt={token3} />
            <h1 className='text-[32px] font-[700] text-[#FFFFFF] pt-[4.5px]'>OpenSea</h1>
        </div>
      </div>
    </div>
  )
}

export default Token;
