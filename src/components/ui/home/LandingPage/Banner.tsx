"use client"
import { useRouter } from "next/navigation";   
import { Roboto } from "next/font/google";
import GradientBtn from "@/components/shared/GradientBtn";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
}); 

const Banner = () => { 
    const router = useRouter();
    return (
        <div className=" min-h-[calc(100vh-80px)]   flex items-center justify-center w-full bg-no-repeat bg-center  bg-cover"
        style={{ backgroundImage: `url('/banner.svg')` }}
        > 
          <div className=" container  flex items-center justify-center ">  
           <div className=" text-[#121212] flex flex-col items-center justify-center"> 
  <p className={` lg:text-[64px] text-[30px] font-bold text-center ${roboto.className}`}>siftdocs.ai </p>  
  <p className={`lg:text-[32px] text-[24px] font-normal text-center  mt-4 ${roboto.className}`}> Best document processing platform </p>  
  <div className=" my-10"  onClick={() => router.push("/prompt")}> 
    <GradientBtn className=" px-[32px] py-[18px] "> Get Started  </GradientBtn>
  </div> 

  <p className="w-2/3 text-[#929292] text-[14px] text-center  font-normal ">viverra leo. Nam elit. nibh odio Sed odio viverra ex placerat. est. sed ipsum sollicitudin. dignissim, faucibus ullamcorper porta dui Vestibulum sed tempor luctus scelerisque malesuada vitae massa Vestibulum facilisis convallis. urna non 
</p>

           </div>
          </div>
        </div>
    );
};

export default Banner;