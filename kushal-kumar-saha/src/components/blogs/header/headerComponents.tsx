'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { ClassNameType, HeaderLinkTypes } from "@/utils/types/types"
import { BlogsTooltip, ConnectTooltip, ContactTooltip, InterestsTooltip, KushalKumarTooltip, PortfolioTooltip, ProjectsTooltip, ServicesTooltip, SigninTooltip } from "./scraps/tooltipContents"
import { HEADER_TOOLTIP_DELAY_DURATION } from "@/utils/constants/constants"

export interface headerDataProps {  kushalkumar: headerValueProps, projects: headerValueProps, interests: headerValueProps, connect: headerValueProps, blogs: headerValueProps, services: headerValueProps, portfolio: headerValueProps, contact: headerValueProps, signin: headerValueProps }
interface headerValueProps { title:string | JSX.Element, content:JSX.Element }

const headerTooltipDfeault = "bg-gradient-to-br from-[#39439f81] to-[#04061870] to-[80%] backdrop-blur-md text-[#cfd4e2]"

const HEADER_DATA:headerDataProps = {
    kushalkumar:    { title:"Kushal Kumar", content:<KushalKumarTooltip className={headerTooltipDfeault}/> },
    projects:       { title:"Projects", content:<ProjectsTooltip className={headerTooltipDfeault}/> },
    interests:      { title:"Interests", content:<InterestsTooltip className={headerTooltipDfeault}/> },
    connect:        { title:"Connect", content:<ConnectTooltip className={headerTooltipDfeault}/> },
    blogs:          { title:"Blogs", content:<BlogsTooltip className={headerTooltipDfeault}/> },
    services:       { title:"Services", content:<ServicesTooltip className={headerTooltipDfeault}/> },
    portfolio:      { title:"Portfolio", content:<PortfolioTooltip className={headerTooltipDfeault}/> },
    contact:        { title:"Contact", content:<ContactTooltip className="bg-gradient-to-br from-[#39439f81] to-[#04061870] to-[88%] backdrop-blur-md text-[#cfd4e2]"/> },
    signin:         { title:"Sign in", content:<SigninTooltip className={headerTooltipDfeault}/> }
}


/* ****************************************************
 * HEADER ELEMENTS *********************
 * ****************************************************/

export function HeaderLink({ className, type }: { className?: ClassNameType, type:HeaderLinkTypes }) {
    let DATA:headerValueProps =     { title:"", content:<></> }

    if(type==='kushalkumar')        { DATA = HEADER_DATA.kushalkumar }
    else if(type==='projects')      { DATA = HEADER_DATA.projects }
    else if(type==='interests')     { DATA = HEADER_DATA.interests }
    else if(type==='connect')       { DATA = HEADER_DATA.connect }
    else if(type==='blogs')         { DATA = HEADER_DATA.blogs }
    else if(type==='services')      { DATA = HEADER_DATA.services }
    else if(type==='portfolio')     { DATA = HEADER_DATA.portfolio }
    else if(type==='contact')       { DATA = HEADER_DATA.contact }
    else if(type==='signin')        { DATA = HEADER_DATA.signin }

    return (
        <TooltipProvider delayDuration={HEADER_TOOLTIP_DELAY_DURATION}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className={className}>{DATA.title}</div>
                </TooltipTrigger>
                {DATA.content}
            </Tooltip>
        </TooltipProvider>
    )
}