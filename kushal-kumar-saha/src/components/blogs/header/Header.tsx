import { ClassNameType, ThemeType } from "@/utils/types/types";



export function BlogsHeader({ theme, className }: { theme: ThemeType, className?: ClassNameType }) {

    return (
        <header className="border-b-[0.667px] border-[#ffffff08] bg-[#ffffff01] dark:text-[#f7f8f8] top-0 sticky backdrop-blur-[12px] z-[100]">
            <nav className="flex justify-between items-center h-14 md:h-12 px-4 md:px-8 max-w-[1160px] relative left-1/2 translate-x-[-50%]">
                <div className="">Kushal Kumar</div>
                <div className="hidden md:block">Projects</div>
                <div className="hidden md:block">Journey</div>
                <div className="hidden md:block">Connect</div>
                <div className="hidden md:block">Blogs</div>
                <div className="hidden md:block">Services</div>
                <div className="hidden md:block">Portfolio</div>
                <div className="hidden md:block">Contact</div>
                <div className="">Sign up</div>
            </nav>
        </header>
    )
}