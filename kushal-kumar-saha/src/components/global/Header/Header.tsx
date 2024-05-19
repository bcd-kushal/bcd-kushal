import { ClassNameType } from "@/defaults/types/reactTypes"
import { ThemeType } from "@/defaults/types/commonTypes"
import { HeaderLink } from "./logic/headerComponents"
import { Hamburger } from "../hamburger/Hamburger"
import { headerData } from "./static/data"




export async function BlogsHeader({ theme, className }: { theme: ThemeType, className?: ClassNameType }) {
    return (
        <header className="border-b-[0.667px] border-[#ffffff20] bg-[#ffffff01] dark:text-[#f7f8f8] top-0 sticky backdrop-blur-[12px] z-[100]">
            <nav className="flex justify-between items-center h-[52px] md:h-12 px-4 md:px-8 max-w-[1160px] relative left-1/2 translate-x-[-50%]">
                {headerData.map((item,index) => (
                    <HeaderLink type={item.label} className={item.className} key={index} />
                ))}
                <Hamburger className="hoverable relative cursor-pointer block md:hidden"/>
            </nav>
        </header>
    )
}