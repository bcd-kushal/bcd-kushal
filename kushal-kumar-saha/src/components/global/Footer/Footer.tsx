'use server'
import { SelfGithubLink } from "@/components/utilities/serverSideUtilities"
import { HEADER_H2 } from "@/utils/decorators/headers"
import { ThemeType } from "@/defaults/types/commonTypes"


export async function Footer({theme}:{theme:ThemeType}) {
    return (
        <footer className="footer-container pt-[25dvh] pb-[65px] z-[40] px-4 md:px-8 max-w-[1160px] relative left-1/2 translate-x-[-50%]">
            <div className={` ${HEADER_H2}`}>Footer</div>
            <div className="afe">aef</div>
            <div className=""></div>
        </footer>
    )
}


export async function RightsReserved() {
    return ( <span className="rights-reserved px-4 md:px-8 absolute bottom-0 left-1/2 -translate-x-1/2 cursor-default text-center z-40 text-[#88f1f311] pb-2 tracking-widest text-[8.03px] min-[350px]:text-[9.25px] sm:text-[10.8px] whitespace-nowrap"> Designed and created by <SelfGithubLink/> • All rights reserved </span> )
}