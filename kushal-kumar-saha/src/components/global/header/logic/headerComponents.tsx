'use client'
import { Tooltip, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { ClassNameType } from "@/defaults/types/reactTypes"
import { HeaderLinkTypes } from "@/defaults/types/commonTypes"
import { HEADER_TOOLTIP_DELAY_DURATION } from "@/defaults/constants"
import KushalKumarSVG from "../../../../../public/logo/kushalkumar_bg_dark.svg"
import Link from "next/link"
import Image from "next/image"
import { headerDataProps, headerValueProps } from "../utils/types"
import { KushalKumarTooltip, BlogsTooltip, ConnectTooltip, GalleryTooltip, InterestsTooltip, PortfolioTooltip, ProjectsTooltip, ServicesTooltip, SigninTooltip } from "./tooltipContents"

const KushalKumarLogo = () => {
    return (
        <span className="flex items-center justify-start gap-2 md:gap-3 text-lg md:text-base">
            <Image src={KushalKumarSVG.src} alt="KushalLogo" width={24} height={24} /><h1>Kushal Kumar</h1>
        </span>
    )
}


const headerTooltipDfeault = "bg-gradient-to-br from-[#39439f81] to-[#04061870] to-[80%] backdrop-blur-md text-[#cfd4e2]"

const HEADER_DATA: headerDataProps = {
    kushalkumar:    { title: <KushalKumarLogo />, href: "/", content: <KushalKumarTooltip className={headerTooltipDfeault} /> },
    projects:       { title: "Projects", href: "/projects", content: <ProjectsTooltip className={headerTooltipDfeault} /> },
    interests:      { title: "Interests", href: "/interests", content: <InterestsTooltip className={headerTooltipDfeault} /> },
    connect:        { title: "Connect", href: "#", content: <ConnectTooltip className={headerTooltipDfeault} /> },
    blogs:          { title: "Blogs", href: "/blogs", content: <BlogsTooltip className={headerTooltipDfeault} /> },
    services:       { title: "Services", href: "/services", content: <ServicesTooltip className={headerTooltipDfeault} /> },
    portfolio:      { title: "Portfolio", href: "https://portfolio.kushalkumarsaha.com/", content: <PortfolioTooltip className={headerTooltipDfeault} /> },
    gallery:        { title: "Gallery", href: "/gallery", content: <GalleryTooltip className="bg-gradient-to-br from-[#39439f81] to-[#04061870] to-[88%] backdrop-blur-md text-[#cfd4e2]" /> },
    signin:         { title: "Sign in", href: "/signin", content: <SigninTooltip className={headerTooltipDfeault} /> },
}


/* ****************************************************
 * HEADER ELEMENTS *********************
 * ****************************************************/

export function HeaderLink({ className, type }: { className?: ClassNameType, type: HeaderLinkTypes }) {
    let DATA: headerValueProps = { title: "", content: <></>, href: "" }

    if (type === 'kushalkumar')     { DATA = HEADER_DATA.kushalkumar }
    else if (type === 'projects')   { DATA = HEADER_DATA.projects }
    else if (type === 'interests')  { DATA = HEADER_DATA.interests }
    else if (type === 'connect')    { DATA = HEADER_DATA.connect }
    else if (type === 'blogs')      { DATA = HEADER_DATA.blogs }
    else if (type === 'services')   { DATA = HEADER_DATA.services }
    else if (type === 'portfolio')  { DATA = HEADER_DATA.portfolio }
    else if (type === 'gallery')    { DATA = HEADER_DATA.gallery }
    else if (type === 'signin')     { DATA = HEADER_DATA.signin }

    return (
        <TooltipProvider delayDuration={HEADER_TOOLTIP_DELAY_DURATION}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href={DATA.href} className={className}>{DATA.title}</Link>
                </TooltipTrigger>
                {DATA.content}
            </Tooltip>
        </TooltipProvider>
    )
}




