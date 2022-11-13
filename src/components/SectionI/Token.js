import token1 from '../asset/images/mbToken.svg';
import token2 from '../asset/images/metaMask.svg';
import meta2 from '../asset/images/metaMask02.svg';
import token3 from '../asset/images/openSea.svg';


const Token = () => {
  return (
    <div id="secI">
      <div className=" w-[80%] mx-[auto] justify-between flex border-2 border-solid border-[yellow]">
        <div className='flex'>
            <img src={token1} alt={token1} />
            <h1>MBToken</h1>
        </div>
        <div className='flex'>
            <img src={token2} alt={token2} />
            <img src={meta2} alt={meta2} />
        </div>
        <div className='pr-[1%] flex'>
            <img src={token3} alt={token3} />
            <h1>OpenSea</h1>
        </div>
      </div>
    </div>
  )
}

export default Token;
