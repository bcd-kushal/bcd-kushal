'use client'
import { ClassNameType, ThemeType } from "@/utils/types/types"
import { HeaderLink } from "./headerComponents"


export function BlogsHeader({ theme, className }: { theme: ThemeType, className?: ClassNameType }) {
    return (
        <header className="border-b-[0.667px] border-[#ffffff08] bg-[#ffffff01] dark:text-[#f7f8f8] top-0 sticky backdrop-blur-[12px] z-[100]">
            <nav className="flex justify-between items-center h-14 md:h-12 px-4 md:px-8 max-w-[1160px] relative left-1/2 translate-x-[-50%]">
                <HeaderLink type="kushalkumar" className="hoverable relative cursor-pointer"/>
                <HeaderLink type="projects" className="hoverable relative cursor-pointer"/>
                <HeaderLink type="interests" className="hoverable relative cursor-pointer"/>
                <HeaderLink type="connect" className="hoverable relative cursor-pointer"/>
                <HeaderLink type="blogs" className="hoverable relative cursor-pointer"/>
                <HeaderLink type="services" className="hoverable relative cursor-pointer"/>
                <HeaderLink type="portfolio" className="hoverable relative cursor-pointer"/>
                <HeaderLink type="contact" className="hoverable relative cursor-pointer"/>
                <HeaderLink type="signin" className="hoverable relative cursor-pointer"/>
            </nav>
        </header>
    )
}