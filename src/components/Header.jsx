import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center w-full bg-[#fff]">
        <div className="items-top">
            <div className="md:text-[50px] lg:text-[100px] text-[30px] font-[500] text-[#000]">Cryptology</div>
            <div className="md:text-[20px] md:leading-[24.2px] md:mt-[20px] mt-[4px] lg:text-[20px] text-[9px] font-[500] text-[#000]">A minimalistic NFT gallery.</div>
        </div>
        <div className="md:text-[20px] cursor-pointer md:leading-[24.2px] lg:text-[16px] text-[9px] font-[500] text-[#000]">get Authorized</div>
      </header>
    </>
  );
};

export default Header;