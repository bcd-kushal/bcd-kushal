import { HEADER_H1, HEADER_H3 } from "@/utils/decorators/headers"
import { textGradient } from "@/utils/decorators/textGradients"
import { GalaxyStarsDarkSvg } from "@/utils/svgs/svg"
import { ChildrenType } from "@/utils/types/types"
import { GithubLink, InstaLink, LinkedinLink, TagGalaxy } from "@/components/utilities/serverSideUtilities"
import { BlogMainHeroBG } from "@/utils/decorators/uiDesigns"


export function BlogBluePrint({ children }: { children: ChildrenType }) {
    return (
        <>

            <section className={`grid relative blog-main-hero-design ${BlogMainHeroBG.before}`}>

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
                    <header className="flex flex-col items-stretch justify-start mt-[92px]">
                        <div className="text-xs mb-[-16px] pl-1">Myself,</div>
                        <div className={`my-6 pb-[10.4px] ${textGradient} ${HEADER_H1} bg-gradient-to-br from-[#fff] from-20% to-[#ffffff38]`}>Kushal Kumar</div>
                        <div className="flex gap-1 mt-[10px]">
                            <TagGalaxy text="130" type="blog" />
                            <TagGalaxy text="83" type="comment" />
                            <TagGalaxy text="351" type="readers" />
                        </div>
                        <div className="hidden gap-1 mt-2 md:hidden">
                            <GithubLink />
                            <InstaLink />
                            <LinkedinLink />
                        </div>
                    </header>
                    {/* ------ links ------------- */}
                    <div className="hidden md:flex md:mb-6 md:items-end md:justify-end md:gap-3">
                        <GithubLink />
                        <InstaLink />
                        <LinkedinLink />
                    </div>
                </div>

            </section>

            {/* ====== CHILDREN ========================== */}
            <main className="max-w-[1160px] px-4 md:px-8 left-1/2 translate-x-[-50%] relative mt-[-160px] md:mt-[-51px]">
                {children}
            </main>
        </>

    )
}