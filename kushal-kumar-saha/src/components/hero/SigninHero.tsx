'use server'
import { GalaxyStarsDarkSvg } from "@/utils/svgs/svg"
import { ChildrenType } from "@/defaults/types/reactTypes"
import { GithubLink, InstaLink, LinkedinLink, TagGalaxy, YoutubeLink } from "@/components/utilities/serverSideUtilities"
import { BlogMainHeroBG } from "@/utils/decorators/uiDesigns"
import { ChevronRightIcon, XIcon } from "lucide-react"
import { GoofyLines } from "@/defaults/constants/goofyLines"
import { getRandomDigit } from "@/utils/getRandomDigit"
import PageTitle from "@/utils/decorators/PageMainTitle"


export async function SigninHeroStructure({ children }: { children: ChildrenType }) {
    const len = GoofyLines.length 
    const goofyLine = GoofyLines[getRandomDigit({stop:len})]
    return (
        <>
            <section className={`grid relative blog-main-hero-design ${BlogMainHeroBG.before} z-[1]`}>

                {/* ---------- globe effect -------- */}
                <div className="w-full h-full absolute overflow-hidden md:mt-[-50px]">
                    <div className="z-[2] globe absolute w-full h-[100dvw] mb-[-81dvw] scale-x-150 md:scale-x-110 md:w-[30dvw] md:h-[30dvw] rounded-ss-full rounded-se-full md:rounded-se-none md:rounded-ss-none md:rounded-es-full bottom-0 md:right-0 md:top-0 border-[#4e5cda40] md:border-[#4e5cda35] hover:border-[#4e5cda75] transition-colors ease-in border-t-[0.6667px] md:border-t-0 md:border-l-[0.6667px]"></div>
                </div>

                {/* ---------- galaxy stars -------- */}
                <div className={`row-start-1 col-start-1 max-w-full md:max-w-[1240px] md:relative md:left-1/2 md:translate-x-[-50%] overflow-hidden`}>
                    <GalaxyStarsDarkSvg dimensions="800" className="relative translate-x-[-100px] translate-y-[-58px] md:translate-y-0 md:translate-x-[-45px]" />
                </div>

                {/* ---------- hero section -------- */}
                <div className="main-container max-w-[1160px] px-4 md:px-8 gap-4 md:gap-7 left-1/2 translate-x-[-50%] relative grid row-start-1 col-start-1 blogs-main">
                    <header className="flex flex-col items-stretch justify-start mt-[85px] md:mt-[92px]">
                        {/* <div className="text-xs mb-[-16px] pl-1">You&apos;ve landed to</div> */}
                        <PageTitle title="Sign in" />
                        <div className="flex flex-col gap-1 -mt-2 items-start justify-start *:flex *:items-center *:justify-start *:gap-1 *:text-sm">
                            <span className="text-[#cacaca]"><ChevronRightIcon height={12} width={12} stroke="#cacaca"/> Access to premium</span>
                            <span className="text-[#cacaca]"><ChevronRightIcon height={12} width={12} stroke="#cacaca"/> Like, comment & bookmark blogs</span>
                            <span className="text-[#cacaca]"><ChevronRightIcon height={12} width={12} stroke="#cacaca"/> Purchase the shop</span>
                            <span className="text-[#c56666] opacity-75"><XIcon height={12} width={12} stroke="#c56666"/> {goofyLine}</span>
                        </div>
                        {/* <div className="flex gap-1 mt-[10px]">
                            <TagGalaxy text="130" type="blog" />
                            <TagGalaxy text="83" type="comment" />
                            <TagGalaxy text="351" type="readers" />
                        </div> */}
                    </header>
                    {/* ------ links ------------- */}
                    <div className="hidden md:flex md:mb-6 md:items-end md:justify-end md:gap-3">
                        <GithubLink />
                        <InstaLink />
                        <LinkedinLink />
                        <YoutubeLink />
                    </div>
                </div>

            </section>

            {/* ====== CHILDREN ========================== */}
            <main className="max-w-[1160px] px-4 md:px-8 left-1/2 translate-x-[-50%] relative z-[2]">
                {children}
            </main>
        </>

    )
}