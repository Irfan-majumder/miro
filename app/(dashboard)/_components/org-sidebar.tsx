"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import {cn} from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
})


export const OrgSidebar = () => {
    return(
        <div className="hidden lg:flex flex-col 
        space-y-6 w-[206px] pl-5 pt-5 ">
            <Link href="/">
                <div className="flex item-center gap-x-2">
                    <Image src="/logo1.svg" 
                    alt="logo" 
                    width={40}
                     height={40} />
                     <span className={cn(
                        "font-semibold text-2xl",
                        font.className,
                     )}>
                         Board
                     </span>
                    
                </div>
            </Link>
        </div>
    );
};
