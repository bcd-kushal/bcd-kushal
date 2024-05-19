import { TooltipContent } from "@/components/ui/tooltip"
import { ClassNameType } from "@/defaults/types/reactTypes"
import { HEADER_TOOLTIP_CONTENT_OFFSET } from "@/defaults/constants"
import Link from "next/link"
import { GithubSvg, InstagSvg, LinkedingSvg, MailSvg, YouTubeSvg, CrunchyrollSvg, AO3Svg, SpotifySvg } from "@/utils/svgs/svg"
import { DiscordLogoIcon } from "@radix-ui/react-icons"
import { PopupContentBox } from "@/components/utilities/exportingWorthComponents"
import { TooltipCard, TooltipCardProps } from "@/components/global/Header/logic/tooltipCards"
import { BracesIcon, ChevronRightIcon, Paintbrush } from "lucide-react"
import { HEADER_H3, HEADER_H4, HEADER_H5 } from "@/utils/decorators/headers"
import { CaraouselImagesType, CarouselComponent } from "@/components/shadcn/carousel"


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
    interface interestsHeaderProps { href:string, svg:JSX.Element, title:string, bgClass:string  }
    type interestsHeaderDataProps = interestsHeaderProps[]

    const DATA:interestsHeaderDataProps = [
        { title:"Anime"     , bgClass:"anime",  href:"https://kushalkumarsaha.com/interests/anime/" ,                                   svg:<CrunchyrollSvg dimensions="16" fill="#ddd9" strokeWidth="2.8"/> },
        { title:"Music"     , bgClass:"music",  href:"https://open.spotify.com/playlist/7wq2NqsDMoDR0GsgAZBISD?si=1903eb9f35cc479c" ,   svg:<SpotifySvg dimensions="16" fill="#ddd9" strokeWidth="3"/> },
        { title:"Genshin"   , bgClass:"genshin",href:"https://kushalkumarsaha.com/interests/genshin/" ,                                 svg:<AO3Svg dimensions="17" fill="#ddd9"/> },
        { title:"Fanfiction", bgClass:"fanfic", href:"https://archiveofourown.org/users/Winter_Frost36/works" ,                         svg:<AO3Svg dimensions="17" fill="#ddd9"/> }
    ]

    return (
        <TooltipContent side="bottom" className={`grid min-w-[200px] min-h-[200px]`} sideOffset={offset}>
            <PopupContentBox className={className}>

                <div className="w-full grid gap-3 min-w-[190px]">
                    <div className="grid grid-cols-1 gap-[5px] transition-all"> {DATA.map((interest,index) => ( <Link key={index} href={interest.href} className={`interestsHeader ${interest.bgClass}-header-tab relative hover:text-white transition-all flex justify-center hover:gap-[7.1px] items-center gap-[10px] border-[0.6667px] border-[#7387ac50] p-2 rounded-[6px] font-semibold tracking-wider cursor-pointer ${HEADER_H5} transition-all z-10 duration-300`}>{interest.svg}<span>{interest.title}</span></Link> ))} </div>
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
    const imageData:CaraouselImagesType = [
        { src:"blogs/kushal-kumar-blogs-landing.png",   alt:"Kushal Kumar Blogs Page" },
    ]
    return (
        <TooltipContent side="bottom" className={`grid min-w-[200px] min-h-[200px]`} sideOffset={offset}>
            <PopupContentBox className={className}>

                <div className="w-full grid gap-3 min-w-[190px] max-w-[280px]">
                    <div className="grid gap-3 transition-all"> 
                        <CarouselComponent images={imageData} width="280px" slideAfter={4500} hideLeft hideRight/> 
                        <div className="pl-[1px] mb-1 flex flex-col items-start gap-[6px]">
                            <span className={`font-semibold tracking-wide ${HEADER_H4}`}>Blogs by Kushal</span>
                            <span className="text-xs text-left text-slate-500">Read, like and subscribe tech, art, life and self-take blogs by me</span>
                        </div>
                        <Link href={"https://blogs.kushalkumarsaha.com/b/crimson-blood-debt/"} className="mt-2 cursor-pointer grid rounded-[6px] border-[0.6667px] border-[32449058] w-full z-10 overflow-hidden">
                            <div className="cursor-pointer w-full h-full row-start-1 col-start-1 overflow-hidden flex items-center justify-start max-h-[52px] *:h-full *:w-[131px]"><img src="https://cdn.gfinityesports.com/images/ncavvykf/gfinityesports/371ec026740936bdab0862eb4176437464763e81-1695x864.png" alt="" /></div>
                            <div className="group/btn hover:text-[#ffffff99] row-start-1 col-start-1 w-full h-full flex flex-col items-stretch justify-center py-2 pl-[65px] pr-3 *:text-left transition-colors duration-300 from-[#07070e] bg-gradient-to-l hover:from-[#000] from-55% to-transparent to-95% brightness-110">
                                <span className="tracking-wider text-[10px] flex items-center transition-transform hover:gap-[1.1px]">Read latest<ChevronRightIcon height={8.5} className="transition-all duration-300 mb-[0.5px] ml-[-3.5px] group-hover/btn:ml-0"/></span>
                                <span className={`${HEADER_H5}`}>Crimson blood debt</span>
                            </div>
                        </Link>
                    </div>
                    <Link href={"https://blogs.kushalkumarsaha.com/"} target="_blank" className="text-[9px] pt-2 border-t-[0.667px] mx-6 border-[#ccc2] text-[#ccc5] tracking-widest">blogs.kushalkumarsaha.com</Link>
                </div>

            </PopupContentBox>
        </TooltipContent>
    )
}

export function ServicesTooltip({ className }: { className?: ClassNameType }) {
    interface servicesHeaderProps { href:string, svg:JSX.Element, title:string }
    type servicesHeaderDataProps = servicesHeaderProps[]

    const DATA:servicesHeaderDataProps = [
        { title:"Web development",      href:"https://kushalkumarsaha.com/interests/anime/" ,                                   svg:<CrunchyrollSvg dimensions="16" fill="#ddd9" strokeWidth="2.8"/> },
        { title:"Bot build",            href:"https://open.spotify.com/playlist/7wq2NqsDMoDR0GsgAZBISD?si=1903eb9f35cc479c" ,   svg:<SpotifySvg dimensions="16" fill="#ddd9" strokeWidth="3"/> },
        { title:"Automation",           href:"https://archiveofourown.org/users/Winter_Frost36/works" ,                         svg:<AO3Svg dimensions="17" fill="#ddd9"/> },
        { title:"Artwork or linearts",  href:"https://archiveofourown.org/users/Winter_Frost36/works" ,                         svg:<AO3Svg dimensions="17" fill="#ddd9"/> },
        { title:"Discord channel",      href:"https://kushalkumarsaha.com/interests/genshin/" ,                                 svg:<AO3Svg dimensions="17" fill="#ddd9"/> },
        { title:"Content creation",     href:"https://archiveofourown.org/users/Winter_Frost36/works" ,                         svg:<AO3Svg dimensions="17" fill="#ddd9"/> },
        { title:"Wordpress",            href:"https://archiveofourown.org/users/Winter_Frost36/works" ,                         svg:<AO3Svg dimensions="17" fill="#ddd9"/> },
        { title:"Server management",    href:"https://archiveofourown.org/users/Winter_Frost36/works" ,                         svg:<AO3Svg dimensions="17" fill="#ddd9"/> },
        { title:"Photoshop edits",      href:"https://archiveofourown.org/users/Winter_Frost36/works" ,                         svg:<AO3Svg dimensions="17" fill="#ddd9"/> },
    ]

    return (
        <TooltipContent side="bottom" className={`tooltip-bg grid min-w-[200px] min-h-[200px]`} sideOffset={offset}>
            <PopupContentBox className={className}>

                <div className="w-full grid gap-3 min-w-[190px]">
                    <div className="grid grid-cols-3 gap-[9px] transition-all"> {DATA.map((interest,index) => ( <Link key={index} href={interest.href} className={`group/service relative hover:text-white transition-all flex flex-col justify-center hover:gap-[1.4px] items-center border-[0.6667px] border-[#7387ac50] px-[10px] rounded-[6px] font-semibold tracking-wider cursor-pointer ${HEADER_H5} transition-all z-10 duration-150 aspect-[2/0.88] max-w-[170px] hover:shadow-[0_0_12px_0.5px_#446af353] hover:duration-200 hover:transition-all`}><span className="group-hover/service:scale-100 scale-0 transition-all">{interest.svg}</span><span className="mt-[-15px] group-hover/service:mt-0 transition-all">{interest.title}</span></Link> ))} </div>
                    <Link href={"https://kushalkumarsaha.com/"} className="text-[9px] pt-2 border-t-[0.667px] mx-6 border-[#ccc2] text-[#ccc5] tracking-widest">kushalkumarsaha.com</Link>
                </div>

            </PopupContentBox>
        </TooltipContent>
    )
}

export function PortfolioTooltip({ className }: { className?: ClassNameType }) {
    const imageData:CaraouselImagesType = [
        { src:"portfolio/kushal-kumar-portfolio-hero.png",   alt:"Kushal Kumar Portfolio Hero" },
        { src:"portfolio/kushal-kumar-portfolio-skills.png", alt:"Kushal Kumar Portfolio Skills" },
        { src:"portfolio/kushal-kumar-portfolio-career.png", alt:"Kushal Kumar Portfolio Career" },
    ]
    return (
        <TooltipContent side="bottom" className={`grid min-w-[200px] min-h-[200px]`} sideOffset={offset}>
            <PopupContentBox className={className}>

                <div className="w-full grid gap-3 min-w-[190px] max-w-[280px]">
                    <div className="grid gap-3 transition-all"> 
                        <CarouselComponent images={imageData} width="280px" slideAfter={4500} hideLeft hideRight/> 
                        <div className="pl-[1px] mb-1 flex flex-col items-start gap-[6px]">
                            <span className={`font-semibold tracking-wide ${HEADER_H4}`}>Portfolio: Kushal Kumar</span>
                            <span className="text-xs text-left text-slate-500">My portfolio for the HR and companies, showcasing my skillsets as a software developer</span>
                        </div>
                    </div>
                    <Link href={"https://portfolio.kushalkumarsaha.com/"} target="_blank" className="text-[9px] pt-2 border-t-[0.667px] mx-6 border-[#ccc2] text-[#ccc5] tracking-widest">portfolio.kushalkumarsaha.com</Link>
                </div>

            </PopupContentBox>
        </TooltipContent>
    )
}

export function GalleryTooltip({ className }: { className?: ClassNameType }) {
    return (
        <TooltipContent side="bottom" className={`grid`} sideOffset={offset}>
            <div className={`row-start-1 col-start-1 place-items-center text-center w-3/4 h-[90%] blur-[6px] brightness-200 scale-x-125 scale-y-110 relative left-1/2 -translate-x-1/2 z-[0] ${className}`}></div>
            <div className="row-start-1 col-start-1 place-items-center text-center z-[1]">Check out awesomeness!</div>
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