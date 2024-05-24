import { GithubLink, InstaLink, LinkedinLink, YoutubeLink } from "@/components/utilities/serverSideUtilities"
import { SetStateType } from "@/defaults/types/reactTypes"
import Link from "next/link"
import { HAMBURGER_INSIDE_CONTENT_LAYOUT } from "../../static/constants"
import { hamburgerData } from "../../static/data"



export function HamburgerInsideContent({ onClick: hamburgerClose }:{ onClick:SetStateType<boolean> }) {
    return (
        <div className="relative flex flex-col h-full items-stretch justify-between">

            {/* RADIAL GLOW =================================== */}
            <span className="absolute -top-20 -left-5 w-full h-full hamburger-radial -z-10"></span>

            {/* MAIN LINKS + CARDS ============================ */}
            <div className={`h-full grid ${HAMBURGER_INSIDE_CONTENT_LAYOUT} gap-x-3 gap-y-5 sm:gap-y-3 items-start justify-between max-[640px]:auto-rows-min`}>
                {/* left side placeholder for sm-scaled areas ---------------------------------- */}
                <h2 className="row-span-12 h-full hidden sm:flex rounded-lg border-2 border-slate-700"></h2>
                {/* top featured card ----------------------------------------------- */}
                <div className="col-span-2 row-span-3 grid grid-cols-2 gap-3 h-full">
                    {hamburgerData.featuredBanners.map((banner,index) => (
                        index===0 ? <Link href={banner.href} key={index} className="row-span-2">{banner.label}</Link> :
                                    <Link href={banner.href} key={index}>{banner.label}</Link>
                    ))}
                </div>
                {/* normal links ---------------------------------------------------- */}
                {hamburgerData.normalLinks.map((data,index) => (
                    <Link href={data.href} key={index} className="text-3xl w-fit pr-2 sm:text-4xl h-full flex items-center pl-1" target={data.href[0]==='/' ? "_self" : "_blank"} onClick={()=>hamburgerClose(prev=>!prev)}>{data.label}</Link>
                ))}
            </div>

            {/* BOTTOM LINKS ==================================== */}
            <div className="flex gap-7 items-center justify-start px-2 py-3">
                <GithubLink />
                <InstaLink />
                <LinkedinLink />
                <YoutubeLink />
            </div>

        </div>
    )
}