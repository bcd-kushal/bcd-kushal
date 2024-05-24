'use server'

// api.ipify.org -> await fetch().text().toString()
// navigator.connection -> rtt, downLink, effectiveType
// navigator.geolocation.getCurrentPosition((data)=>console.log(data))

import { GalaxyStarsDarkSvg } from "@/utils/svgs/svg"

export async function EarthEffect() {
    return (
        <div className="earth-light w-full h-[130vh] absolute bottom-0 overflow-hidden">
            <span className="absolute rotate-[190deg] brightness-[2] top-[30px] left-[-240px] w-fit scale-[0.5]"><GalaxyStarsDarkSvg dimensions="580" height="730" /></span>
            <span className="absolute rotate-[190deg] bottom-[-150px] opacity-[0.47] sm:opacity-[0.69] scale-[0.5] min-[460px]:scale-[0.69] right-[-130px] sm:right-[-80px]"><GalaxyStarsDarkSvg dimensions="580" height="730" /></span>
            <div className="earth z-[2] absolute -bottom-1/2 w-full h-[100dvw] scale-x-[2.5] rounded-full -translate-y-[300px] sm:translate-y-[-70px] min-[684px]:translate-y-[-40px] min-[410px]:-translate-y-[250px] min-[456px]:-translate-y-[210px] min-[530px]:-translate-y-[170px] md:translate-y-[12dvw] min-[848px]:translate-y-[20dvw] min-[885px]:translate-y-[26dvw] lg:translate-y-[33dvw] min-[1160px]:translate-y-[40dvw] min-[1270px]:translate-y-[47dvw] sm:rotate-[-18.3deg] md:rotate-[-10.1deg] rotate-[-22.7deg] min-[1270px]:rotate-[-6.7deg] bg-slate-900"></div>
            <div className="earth-luminance z-[-1] blur-[12px] brightness-[4.3] absolute -bottom-1/2 w-full h-[100dvw] scale-x-[2.5] rounded-full -translate-y-[300px] sm:translate-y-[-70px] min-[684px]:translate-y-[-40px] min-[410px]:-translate-y-[250px] min-[456px]:-translate-y-[210px] min-[530px]:-translate-y-[170px] md:translate-y-[12dvw] min-[848px]:translate-y-[20dvw] min-[885px]:translate-y-[26dvw] lg:translate-y-[33dvw] min-[1160px]:translate-y-[40dvw] min-[1270px]:translate-y-[47dvw] rotate-[-20.67deg] sm:rotate-[-17deg] md:rotate-[-10.67deg] min-[1270px]:rotate-[-6.05deg] bg-slate-900"></div>
        </div>
    )
}


export async function BottomGreatStar() {
    return (
        <span className="z-30 absolute bottom-[300px] w-full overflow-hidden flex items-center justify-end">
            <div className="scale-110 mb-[300px] mr-[-180px] brightness-[.41] md:mb-0 md:-translate-y-[380px] lg:-translate-y-[280px]"><GalaxyStarsDarkSvg dimensions="580" height="650" /></div>
        </span>
    )
}
