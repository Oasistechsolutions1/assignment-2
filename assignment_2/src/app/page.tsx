import Link from "next/link";
export default function Home() {
  return (
    <div className="w-[1440px] h-[1132px] bg-[#252B42]">
      <div className=" justify-items-center">
        <nav className="w-[1322px] h-[91px]  flex items-center relative">
          <div className="w-[815px] h-[58px]  ml-[364px] space-x-[21px] flex items-center relative">

            
            <div className="flex items-center w-[275px] h-[24px] space-x-[21px]">
              <Link href="" className="text-white">Home</Link>
              <Link href="" className="text-white">Product</Link>
              <Link href="" className="text-white">Pricing</Link>
              <Link href="" className="text-white">Contact</Link>
            </div>

            
            
            <div className="absolute right-0 flex gap-[45px]">
              <button className="text-white">Log In</button>
              
              <button className="text-white bg-[#23A6F0] w-[110px] h-[52px] rounded-[5px]">Join Us</button>
            </div>
          </div>

          
          <div className="text-white inline-flex w-[187px] h-[58px] items-center absolute left-[136px]">
            For Brand Name
          </div>
        </nav>
      </div>
      {/* nabar finished */}
      {/* page layout started from here */}
      <div className="h-[1028px] w-[1048px] absolute left-[196px] top-[104px] flex flex-col justify-evenly items-center">  {/*parent div*/}
    <div className="h-[496px] w-[701px] text-white pt-[40px] pb-[40px] flex flex-col items-center gap-[40px] "> {/*child div*/}
      <h5 className="w-[77px] h-[24px] text-[#23A6F0] font-bold text-[16px] leading-6 tracking-widest flex">welcome</h5>
      <h1 className="w-[542px] h-[160px] font-bold text-[58px] justify-items-center align-middle text-center flex">Selling on the internet like a pro</h1>
      <p className="w-[536px] h-[60px] font-normal text-xl text-center leading-[30px]">We know how large objects will act, but things on a small scale just do not act that way.</p>
      <div className="w-[365px] h-[52px] gap-[10px] flex">
        <button className="w-[193px] h-[52px] bg-[#23A6F0] rounded-[5px]"> get qoute Now</button>
        <button className="w-[162px] h-[52px] text-[#23A6F0] border-[#23A6F0] border-[1px] ">learn more</button>
      </div>
    </div>
    <div className="flex w-full justify-between items-center">
      <div className="w-[328px] h-[292px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] bg-white flex-col flex gap-5 blur-">
        <div className="w-[70px] h-[78px] rounded-[10px] bg-[#FFDCD1] pt-[22px] pr-[19px] pb-[22px] pl-[19px]"></div>
        <h3 className="w-[168px] h-[24px] leading-6 font-bold text-[16px]">training courses</h3>
        <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
        <p className="w-[222px] h-[60px] text-[14px] leading-5 text-[#737373] ">The gradual accumulation of information about atomic and small-scale behaviour...</p>
      </div>
      <div className="w-[328px] h-[292px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] bg-white flex-col flex gap-5">
        <div className="w-[70px] h-[78px] rounded-[10px] bg-[#B9EAA8] p "></div>
        <h3 className="w-[168px] h-[24px] leading-6 font-bold text-[16px]">2,769 online courses</h3>
        <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
        <p className="w-[222px] h-[60px] text-[14px] leading-5 text-[#737373]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
      </div>
      <div className="w-[328px] h-[292px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] bg-[#23A6F0] flex-col flex gap-5 ">
        <div className="w-[70px] h-[78px] rounded-[10px] bg-white "></div>
        <h3 className="w-[168px] h-[24px] leading-6 font-bold text-[16px]">training courses</h3>
        <div className="w-[50px] h-[2px] bg-[#ffffff]"></div>
        <p className="w-[222px] h-[60px] text-[14px] leading-5 text-white">The gradual accumulation of information about atomic and small-scale behaviour...</p>
      </div>
    </div>
</div>


    </div>
  )
}