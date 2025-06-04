import Image from "next/image";
import Link from "next/link";
import left from "@/public/svg/left.svg";
import successful from "@/public/svg/successful.svg";

function Successful () {
        return (
            <div className="bg-[#ffffff] fixed px-[24px] top-0 left-0 z-20 w-full h-full">
                {/* go back */}
               <div className="flex items-center gap-x-[8px] pb-[44px] lg:pb-[72px] pl-[60px] pt-[60px]">
                <button className="text-[12px] font-normal text-[#000000]">
                    <Link href="/"  className=" flex items-center gap-x-2">
                    <Image src={left} alt="arrow right" className="w-[10.67px]"/> <span className="text-[12px] font-normal text-[#000000] leading-[100%]"> Go back
                    </span> 
                    </Link>
                </button>
               </div>

               <div>
                <div className="mb-[63.05px] lg:mb-[79.13px] grid place-items-center">
                    <Image src={successful} alt="successful svg"/>
                </div>
                    <div>
                        <h2 className="text-[20px] font-bold leading-[100%] pb-[12px] w-[342px] mx-auto text-center lg:w-full text-[#000000]">PASSWORD RESET <br className="md:hidden"/> SUCCESSFULLY</h2>
                        <p className="text-center text-[12px] leading-[100%] font-normal pb-[22px] text-[#00000099]">You can now log in to your account using your new password</p>

                        <Link href="/auth/login">
                             <button type="submit" className="bg-[#000000] grid place-items-center text-[14px] text-[#ffffff] leading-[100%] lg:max-w-[803px] w-full mx-auto font-medium rounded-[62px] px-[54px] py-[16px]">Login</button>
                        </Link>
                    </div>
               </div>
            </div>
        )
}

export default Successful;