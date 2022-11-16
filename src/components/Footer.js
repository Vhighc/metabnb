import footerLogo from "./asset/images/footerLogo.svg";
import facebook from "./asset/images/facebook.svg";
import instagram from "./asset/images/instagram.svg";
import twitter from "./asset/images/twitter.svg";
import copywright from "./asset/images/copywright.svg";
import { footer } from "../components/Constant/footerData";

const Footer = () => {
  return (
    <div className='bg-[#1D1D1E] pt-[3%] p-[2%] px-[5%]'>
      {/* <footer className="flex border-[green] border-[2px] border-solid"> */}
      <footer className="flex flex-wrap">
        {/* <div className="border-[red] border-[2px] border-solid basis-[35%]"> */}
        <div className="basis-[35%]">
          <div className='mb-[20%]'>
            <img src={footerLogo} alt={footerLogo} />
          </div>
          {/* <div className="flex mb-[10%] border-[red] border-[2px] border-solid w-[40%] justify-between"> */}
          <div className="flex mb-[10%] w-[40%] justify-between">
            <img src={facebook} alt={facebook} />
            <img src={instagram} alt={instagram} />
            <img src={twitter} alt={twitter} />
          </div>
          <div className="flex">
            <img className='w-[15px]' src={copywright} alt={copywright} />
            <p className='pl-[2%] text-[16px] text-[#F7F7F7] font-[400]'>2022 Metabnb</p>
          </div>
        </div>
        {/* <div className="flex border-[yellow] border-[2px] border-solid basis-[60%] justify-between"> */}
        <div className="flex basis-[60%] justify-between">
          {footer.map((item, index) => (
            <div key={index} {...item}>
                <h5 className='mb-[15px] text-[#FFFFFF] text-[18px] font-[700]'>{item.title}</h5>
                <h6 className='mb-[11px] text-[#F1F3F9] text-[14px] font-[400]'>{item.name1}</h6>
                <h6 className='mb-[11px] text-[#F1F3F9] text-[14px] font-[400]'>{item.name2}</h6>
                <h6 className='mb-[11px] text-[#F1F3F9] text-[14px] font-[400]'>{item.name3}</h6>
                <h6 className=' text-[#F1F3F9] text-[14px] font-[400]'>{item.name4}</h6>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;

