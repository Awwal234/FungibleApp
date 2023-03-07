import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const CardsNft = () => {
  useEffect(() => {
    console.log("CardsNft")
  })
  const [nft, setNft] = useState('')
  const handleInputs=(event)=>{
    setNft(event.target.value)
  }
  const giveoutNft=async()=>{
    try{
        const res = await axios.get('https://public.api.cryptokitties.co/v1/kitties?gen=3-4')
        console.log(res.data)
    }catch(err){
        console.log(err)
    }
  }
  return (
    <>
        <div>
            <input type="" className="border border-gray-400 mt-[10px] w-full rounded-sm md:w-[50%] py-[4px] px-[20px] focus:outline-none" value={nft} onChange={handleInputs}/>
            <div></div>
            <button onClick={giveoutNft} type="button" className="bg-[#262626] text-[#fff] text-[16px] font-[400] w-full mt-[10px] text-center rounded-sm md:w-[50%] py-[4px] px-[20px]">Search</button>
        </div>
        
        {/* Display board */}
        <div></div>
    </>
  );
};

export default CardsNft;
