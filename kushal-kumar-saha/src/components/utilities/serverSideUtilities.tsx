import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { GithubSvg, InstagSvg, LinkedingSvg, YouTubeSvg } from "@/utils/svgs/svg"
import { ClassNameType } from "@/defaults/types/reactTypes"
import { Input } from "../ui/input"
import { MessageCircleIcon, NotebookTextIcon, SearchIcon, UsersRoundIcon } from "lucide-react"
import { HEADER_H3 } from "@/utils/decorators/headers"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { DiscordLogoIcon } from "@radix-ui/react-icons"




/* ****************************************************
 * SOCIAL LINKS *********************
 * ****************************************************/
// GITHUB +++++++++++++++++
export function GithubLink({className}:{className?:ClassNameType}) {
    return (
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <Link href="https://github.com/bcd-kushal/" target="_blank" className={`galaxy-link p-2 transition-all cursor-pointer ${className||""}`}><GithubSvg dimensions="17" strokeWidth="1.5"/></Link>
            </TooltipTrigger><TooltipContent  className="bg-transparent text-white">
                GitHub
        </TooltipContent></Tooltip></TooltipProvider>
    )
}

// LINKEDIN +++++++++++++++++
export function LinkedinLink({className}:{className?:ClassNameType}) {
    return (
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <Link href="https://linkedin.com/in/dev-kushal/" target="_blank" className={`galaxy-link p-2 transition-all cursor-pointer ${className||""}`}><LinkedingSvg dimensions="17" strokeWidth="1.5"/></Link>
            </TooltipTrigger><TooltipContent className="bg-transparent text-white">
                LinkedIn
        </TooltipContent></Tooltip></TooltipProvider>
    )
}

// INSTAGRAM +++++++++++++++++++
export function InstaLink({className}:{className?:ClassNameType}) {
    return (
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <Link href="https://instagram.com/dev.kushalkumar/" target="_blank" className={`galaxy-link p-2 transition-all cursor-pointer ${className||""}`}><InstagSvg dimensions="17" strokeWidth="1.5"/></Link>
            </TooltipTrigger><TooltipContent  className="bg-transparent text-white">
                Instagram
        </TooltipContent></Tooltip></TooltipProvider>
    )
}

// DISCORD +++++++++++++++++++
export function DiscordLink({className}:{className?:ClassNameType}) {
    return (
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <Link href="#" target="_blank" className={`galaxy-link p-2 transition-all cursor-pointer ${className||""}`}><DiscordLogoIcon width="17" height="17" strokeWidth="1.5"/></Link>
            </TooltipTrigger><TooltipContent  className="bg-transparent text-white">
                Discord
        </TooltipContent></Tooltip></TooltipProvider>
    )
}

// YOUTUBE +++++++++++++++++++
export function YoutubeLink({className}:{className?:ClassNameType}) {
    return (
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <Link href="#" target="_blank" className={`galaxy-link p-2 transition-all cursor-pointer ${className||""}`}><YouTubeSvg dimensions="17" strokeWidth="1.5"/></Link>
            </TooltipTrigger><TooltipContent  className="bg-transparent text-white">
                Youtube
        </TooltipContent></Tooltip></TooltipProvider>
    )
}


export function SelfGithubLink({className}:{className?:ClassNameType}) {
    return (
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <Link id="rightsReservedLink" href="https://github.com/bcd-kushal/">Kushal Kumar Saha</Link>
            </TooltipTrigger><TooltipContent  className="bg-[#88f1f308] text-slate-500 flex gap-2 backdrop-blur-sm items-center">
                <Avatar className="h-5 w-5"><AvatarImage alt="@bcd-kushal" src="https://github.com/bcd-kushal.png"/><AvatarFallback>K</AvatarFallback></Avatar>
                /bcd-kushal
        </TooltipContent></Tooltip></TooltipProvider>
    )
}





/* ****************************************************
 * INPUT FIELDS *********************
 * ****************************************************/

export function SearchBarGalaxy({className}:{className?:ClassNameType}) {
    return (
        <div className="grid">
            <div className="flex items-center row-start-1 col-start-1"><SearchIcon strokeWidth={2.2} stroke="#b3b3b330" width={20} height={20}/></div>
            <Input className={`placeholder:dark:text-[#b3b3b330] ${HEADER_H3} rounded-none pl-7 border-none row-start-1 col-start-1`} placeholder={"Search blog"}/>
        </div>
    )
}





/* ****************************************************
 * TAGS *********************
 * ****************************************************/

export async function TagGalaxy({text, type, className}:{text:string, type:'normal'|'comment'|'readers'|'blog', className?:ClassNameType}) {
    return ( 
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <div className={`hoverable relative dark:text-[#d0d1d1] bg-[#ffffff01] cursor-pointer backdrop-blur-[1.2px] border-[0.6667px] w-fit rounded-s-full rounded-e-full flex items-center px-3 font-medium leading-[28px] text-[13px] h-7`}> {type==='comment' ? <MessageCircleIcon width={11} height={11} className="mb-[1px] mr-1"/> : type==='readers' ? <UsersRoundIcon width={11} height={11} className="mb-[1px] mr-1"/>  : type==='blog' ? <NotebookTextIcon width={11} height={11} className="mb-[1px] mr-1"/> : ""} {text} </div>
            </TooltipTrigger><TooltipContent side="bottom"  className="bg-transparent text-[#fff8]">
                {type==='comment' ? "Comments" : type==='readers' ? "Readers" : type==='blog' ? "Blogs" : "" }{type==='normal' ? "":`: ${text}`}
        </TooltipContent></Tooltip></TooltipProvider>
    )
}