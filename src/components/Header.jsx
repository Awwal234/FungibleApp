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
      
      {/* login and signup modal */}
      <div className="absolute md:w-[70%] w-[90%] mt-[50px]">
        <div className="md:w-[70%] bg-[#fff] w-full rounded-md shadow-sm mx-auto pb-[30px]">
          {/* tabs for login and signup */}
          <div className="flex">
            <div className="w-[50%] bg-[#f1f5f9] border-r border-[#fff] rounded-tl-md py-[10px] text-center font-[400] text-[15px]">SignUp</div>
            <div className="w-[50%] bg-[#f1f5f9] rounded-tr-md py-[10px] text-center font-[400] text-[15px]">Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;