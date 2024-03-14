import { TooltipContent } from "@/components/ui/tooltip"
import { ClassNameType } from "@/utils/types/types"
import { HEADER_TOOLTIP_CONTENT_OFFSET } from "@/utils/constants/constants"
import Link from "next/link"
import { GithubSvg, InstagSvg, LinkedingSvg, MailSvg, YouTubeSvg } from "@/utils/svgs/svg"
import { DiscordLogoIcon } from "@radix-ui/react-icons"
import { PopupContentBox } from "@/components/utilities/exportingWorthComponents"
import { TooltipCard, TooltipCardProps } from "./tooltipCards"
import { BracesIcon, Paintbrush } from "lucide-react"
import { HEADER_H3, HEADER_H5 } from "@/utils/decorators/headers"

interface cardDataProps { software: TooltipCardProps, art: TooltipCardProps }

const offset = HEADER_TOOLTIP_CONTENT_OFFSET

export function KushalKumarTooltip({ className }: { className?: ClassNameType }) {
    return (
        <TooltipContent side="bottom" className={`grid`} sideOffset={offset}>
            <div className={`row-start-1 col-start-1 place-items-center text-center w-3/4 h-[90%] blur-[6px] brightness-200 scale-x-125 scale-y-110 relative left-1/2 -translate-x-1/2 z-[0] ${className}`}></div>
            <div className="row-start-1 col-start-1 place-items-center text-center z-[1]">Myself, Kushal Kumar Saha</div>
        </TooltipContent>
    )
}

export function ProjectsTooltip({ className }: { className?: ClassNameType }) {
    const cardData: cardDataProps = {
        software: { title: "Software", thumbnail: <BracesIcon height={20} />, subtitle: "Web, system-level softwares and more", imgSrc: "https://github.com/rudrakumarmishraa.png", href: "https://kushalkumarsaha.com/projects/tech/" },
        art: { title: "Artworks", thumbnail: <Paintbrush height={20} />, subtitle: "Digital art projects and anime commissions", imgSrc: "https://github.com/bcd-kushal.png", href: "https://kushalkumarsaha.com/projects/arts/" }
    }
    return (
        <TooltipContent side="bottom" className={`grid min-w-[200px] min-h-[200px]`} sideOffset={offset}>
            <PopupContentBox className={className}>

                <div className="w-full grid gap-3">
                    <div className="flex gap-4 items-stretch justify-center">
                        <TooltipCard data={cardData.software} style="modern" className="max-w-[190px]" img={{ w: "200px" }}>lorem</TooltipCard>
                        <TooltipCard data={cardData.art} style="modern" className="max-w-[190px]" img={{ w: "200px" }}>lorem</TooltipCard>
                    </div>
                    <Link href={"https://kushalkumarsaha.com/"} className="text-[9px] pt-2 border-t-[0.667px] mx-6 border-[#ccc2] text-[#ccc5] tracking-widest">kushalkumarsaha.com</Link>
                </div>

            </PopupContentBox>
        </TooltipContent>
    )
}

export function InterestsTooltip({ className }: { className?: ClassNameType }) {
    return (
        <TooltipContent side="bottom" className={`grid min-w-[200px] min-h-[200px]`} sideOffset={offset}>
            <PopupContentBox className={className}>

                <div className="w-full grid gap-3 min-w-[190px]">
                    <div className="grid grid-cols-1 gap-[5px]">
                        <div className={`flex justify-center items-center gap-2 border-[0.6667px] border-[#7387ac50] p-2 rounded-[6px] font-semibold tracking-wider cursor-pointer ${HEADER_H5} transition-all z-10 duration-300`}>Anime</div>
                        <div className={`border-[0.6667px] border-[#7387ac50] p-2 rounded-[6px] font-semibold tracking-wider cursor-pointer ${HEADER_H5} transition-all z-10 duration-300`}>Spotify</div>
                        <div className={`border-[0.6667px] border-[#7387ac50] p-2 rounded-[6px] font-semibold tracking-wider cursor-pointer ${HEADER_H5} transition-all z-10 duration-300`}>Blogging</div>
                        <div className={`border-[0.6667px] border-[#7387ac50] p-2 rounded-[6px] font-semibold tracking-wider cursor-pointer ${HEADER_H5} transition-all z-10 duration-300`}>Anime</div>
                        <div className={`border-[0.6667px] border-[#7387ac50] p-2 rounded-[6px] font-semibold tracking-wider cursor-pointer ${HEADER_H5} transition-all z-10 duration-300`}>Anime</div>
                    </div>
                    <Link href={"https://kushalkumarsaha.com/"} className="text-[9px] pt-2 border-t-[0.667px] mx-6 border-[#ccc2] text-[#ccc5] tracking-widest">kushalkumarsaha.com</Link>
                </div>

            </PopupContentBox>
        </TooltipContent>
    )
}

export function ConnectTooltip({ className }: { className?: ClassNameType }) {
    return (
        <TooltipContent side="bottom" className={`grid`} sideOffset={offset}>
            <div className={`row-start-1 col-start-1 place-items-center text-center w-3/4 h-[90%] blur-[6px] brightness-200 scale-x-125 scale-y-110 relative left-1/2 -translate-x-1/2 z-[0] ${className}`}></div>
            <div className="row-start-1 col-start-1 place-items-center text-center z-[1] flex gap-[17px]">
                <Link href={"https://github.com/bcd-kushal/"} className="relative hover:scale-125 hover:before:content-['GitHub'] hover:before:absolute hover:before:inset-0 hover:before:mt-4 hover:before:text-[8px] hover:before:translate-x-1/4 hover:before:-left-full transition-all" target="_blank">                   <GithubSvg dimensions="14" /></Link>
                <Link href={"https://linkedin.com/in/dev-kushal/"} className="relative hover:scale-125 hover:before:content-['LinkedIn'] hover:before:absolute hover:before:inset-0 hover:before:mt-4 hover:before:text-[8px] hover:before:translate-x-1/4 hover:before:-left-full transition-all" target="_blank">              <LinkedingSvg dimensions="14" /></Link>
                <Link href={"https://discordapp.com/users/645552257139605504/"} className="relative hover:scale-125 hover:before:content-['Discord'] hover:before:absolute hover:before:inset-0 hover:before:mt-4 hover:before:text-[8px] hover:before:translate-x-1/4 hover:before:-left-full transition-all" target="_blank"> <DiscordLogoIcon width={14} height={14} /></Link>
                <Link href={"https://instagram.com/dev.kushalkumar/"} className="relative hover:scale-125 hover:before:content-['Instagram'] hover:before:absolute hover:before:inset-0 hover:before:mt-4 hover:before:text-[8px] hover:before:translate-x-1/4 hover:before:-left-full transition-all" target="_blank">           <InstagSvg dimensions="14" /></Link>
                <Link href={"https://youtube.com/"} className="relative hover:scale-125 hover:before:content-['YouTube'] hover:before:absolute hover:before:inset-0 hover:before:mt-4 hover:before:text-[8px] hover:before:translate-x-1/4 hover:before:-left-full transition-all" target="_blank">                              <YouTubeSvg dimensions="14" /></Link>
                <Link href={"mailto:dev@kushalkumarsaha.com"} className="relative hover:scale-125 hover:before:content-['Mail'] hover:before:absolute hover:before:inset-0 hover:before:mt-4 hover:before:text-[8px] hover:before:translate-x-1/4 hover:before:-left-full transition-all" target="_blank">                    <MailSvg dimensions="14" /></Link>

            </div>
        </TooltipContent>
    )
}

export function BlogsTooltip({ className }: { className?: ClassNameType }) {
    return (
        <TooltipContent side="bottom" className={`grid min-w-[200px] min-h-[200px]`} sideOffset={offset}>
            <PopupContentBox className={className}>
                Blogs by Kushal
            </PopupContentBox>
        </TooltipContent>
    )
}

export function ServicesTooltip({ className }: { className?: ClassNameType }) {
    return (
        <TooltipContent side="bottom" className={`grid min-w-[200px] min-h-[200px]`} sideOffset={offset}>
            <PopupContentBox className={className}>
                Services of Kushal
            </PopupContentBox>
        </TooltipContent>
    )
}

export function PortfolioTooltip({ className }: { className?: ClassNameType }) {
    return (
        <TooltipContent side="bottom" className={`grid min-w-[200px] min-h-[200px]`} sideOffset={offset}>
            <PopupContentBox className={className}>
                Kushal&apos;s portfolio
            </PopupContentBox>
        </TooltipContent>
    )
}

export function ContactTooltip({ className }: { className?: ClassNameType }) {
    return (
        <TooltipContent side="bottom" className={`grid`} sideOffset={offset}>
            <div className={`row-start-1 col-start-1 place-items-center text-center w-3/4 h-[90%] blur-[6px] brightness-200 scale-x-125 scale-y-110 relative left-1/2 -translate-x-1/2 z-[0] ${className}`}></div>
            <div className="row-start-1 col-start-1 place-items-center text-center z-[1]">Drop a hi to work together</div>
        </TooltipContent>
    )
}

export function SigninTooltip({ className }: { className?: ClassNameType }) {
    return (
        <TooltipContent side="bottom" className={`grid`} sideOffset={offset}>
            <div className={`row-start-1 col-start-1 place-items-center text-center w-3/4 h-[90%] blur-[6px] brightness-200 scale-x-125 scale-y-110 relative left-1/2 -translate-x-1/2 z-[0] ${className}`}></div>
            <div className="row-start-1 col-start-1 place-items-center text-center z-[1]">To like, comment and bookmark blogs</div>
        </TooltipContent>
    )
}