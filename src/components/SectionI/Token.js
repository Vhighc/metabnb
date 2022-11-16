import token1 from '../asset/images/mbToken.svg';
import token2 from '../asset/images/metaMask.svg';
import meta2 from '../asset/images/metaMask02.svg';
import token3 from '../asset/images/openSea.svg';


const Token = () => {
  return (
    <div id="bgImg">
      <div className=" w-[80%] mx-[auto] justify-between flex flex-wrap  max-[768px]:w-[100%]  max-[768px]:m-[0px]">
      {/* <div className=" w-[80%] mx-[auto] justify-between flex border-2 border-solid border-[yellow]"> */}
        <div className='flex'>
        {/* <div className='flex border-2 border-solid border-[red]'> */}
            <img className='w-[50px]  max-[768px]:w-[40px]' src={token1} alt={token1} />
            <h1 className='text-[40px]  text-[#F7F7F7] font-[700] max-[768px]:text-[30px]'>MBToken</h1>
        </div>
        <div className='flex'>
        {/* <div className='flex border-2 border-solid border-[green]'> */}
            <img className='w-[37px]  max-[768px]:w-[27px]' src={token2} alt={token2} />
            <img className='w-[164px]  max-[768px]:w-[154px]' src={meta2} alt={meta2} />
        </div>
        <div className='pr-[1%] flex'>
        {/* <div className='pr-[1%] flex border-2 border-solid border-[yellow]'> */}
            <img className='w-[38px]  max-[768px]:w-[28px]' src={token3} alt={token3} />
            <h1 className='text-[32px] max-[768px]:text-[22px] font-[700] text-[#FFFFFF] pt-[4.5px]'>OpenSea</h1>
        </div>
      </div>
    </div>
  )
}

export default Token;
