import React from "react";

const HeroSection = () => {
  return (
    <div>
        <div className="hero_section bg-[transparent] border border-transparent w-full h-fit">
            <div className="md:h-[80px] border-t-[1px] border-[#000] md:mt-[400px] mt-[300px] h-[30px] bg-[#fff]"></div>
            <div className="mt-[50px] md:mt-[100px]">
                <div className="md:text-[40px] lg:text-[60px] text-[#000] text-[30px] font-[500] md:leading-[72.61px]">Customize. Share.</div>
            </div>
            <div className="md:text-[17px] md:w-[470px] lg:w-[960px] lg:text-[20px] text-[#000] text-[13px] font-[500] mt-[46px] md:leading-[24.2px]">
              Cryptology is the first NFT gallery and platform that allows users to create variations of their NFTS pixel by pixel. Using HD rendering software, replica NFTS can be made only by the current address holder.
            </div>
            <div className="md:text-[17px] mt-[24px] md:w-[470px] lg:w-[960px] lg:text-[20px] text-[#36C578] text-[13px] font-[500] md:leading-[24.2px]">
              Become the digital banksy.
            </div>
        </div>
    </div>
  );
};

export default HeroSection;
