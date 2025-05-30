import Image from "next/image";
import Link from "next/link";
import left from "@/public/svg/left.svg";
import successful from "@/public/svg/successful.svg";

function Successful () {
        return (
            <div className="bg-[#ffffff] p-6 lg:p-10 fixed z-20 top-0 left-0 w-full h-full">
                {/* go back */}
               <div className="flex items-center gap-x-[8px] pb-[44px] pt-[60px]">
                <button className="text-[12px] font-normal text-[#000000]">
                    <Link href="/"  className=" flex items-center gap-x-2">
                    <Image src={left} alt="arrow right" className="w-[10.67px]"/> <span> Go back
                    </span> 
                    </Link>
                </button>
               </div>

               <div>
                    <Image src={successful} alt="successful svg"/>
                    <div>
                        <h2>PASSWORD RESET SUCCESSFUL</h2>
                        <p>You can now log in to your account using your new password</p>

                        <Link href="/auth/login">
                            <button>Login</button>
                        </Link>
                    </div>
               </div>
            </div>
        )
}

export default Successful;