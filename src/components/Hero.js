import Hero1 from "./asset/images/heroImg01.svg";
import Hero2 from "./asset/images/heroImg02.svg";
import Hero3 from "./asset/images/heroImg03.svg";
import Hero4 from "./asset/images/heroImg04.svg";

const Hero = () => {
  return (
    // <div className="border-2 border-solid border-[yellow]">
    <div className="">
      <div className="mx-[5%]">
      {/* <div  className="flex border-2 border-solid border-[green]"> */}
      <div  className="flex">
        <div className="basis-[57%] ">
          <div>
            <h2 className="text-[#434343] text-[56px] font-bold">
              Rent a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A02279] to-[#A02279]">
                {" "}
                Place
              </span>{" "}
              away from
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A02279] to-[#A02279]">
                {" "}
                Home
              </span>{" "}
              in the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A02279] to-[#A02279]">
                {" "}
                Metaverse
              </span>
            </h2>
            <p className="text-[24px] text-[#434343] font-normal mt-[4%]">
                we provide you access to luxury and affordable houses in the
                metaverse, get a chance to turn your imagination to reality at
                your comfort zone
            </p>
            <div className="mt-[5%]">
            <input className="pl-[2%] w-[390px] h-[54px] border-[1px] border-solid border-[#A3A3A3] font-normal text-[14px] placeholder:text-[#B8B8B8]" type="text" placeholder="Search for location" />
            <input className='w-[230px] h-[54px] rounded-r-[8px] text-[#FFFFFF] text-[16px] font-normal bg-gradient-to-r from-[#A02279] to-[#A02279]' type="button" value="Search" />
            </div>
          </div>
        </div>
        <div className=" basis-[43%]">
        {/* <div className="flex border-2 border-solid border-[purple] justify-center gap-[4px]"> */}
        <div className="flex justify-center gap-[4px]">
            <div className='pt-[70px]'>
                <img className='mb-[4px]' src={Hero1} alt={Hero1} />
                <img src={Hero2} alt={Hero2} />
            </div>
            <div className=''>
                <img className='mb-[4px]' src={Hero3} alt={Hero3} />
                <img src={Hero4} alt={Hero4} />
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
