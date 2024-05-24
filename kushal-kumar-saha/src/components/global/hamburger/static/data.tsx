import { ExternalLinkPreview } from "@/utils/decorators/externalLinkPreview"
import { hamburgerDataType } from "../utils/types"
import { ClassNameType } from "@/defaults/types/reactTypes"



export const Card = ({ className }:{ className?:ClassNameType }) => {
    return (
        <section className={`py-3 px-4 rounded-2xl border-[1px] border-[#bbb2] bg-gradient-to-b from-[#fff0] to-[#ffffff05] w-full h-full ${className}`}>Good card</section>
    )
}


export const hamburgerData: hamburgerDataType = {
    normalLinks: [
        { href:"/blogs",                                label:"Blogs" },
        { href:"/connect",                              label:"Connect" },
        { href:"/gallery",                              label:"Gallery" },
        { href:"/",                                     label:"Home" },
        { href:"/interests",                            label:"Interests", },
        { href:"https://portfolio.kushalkumarsaha.com", label:<ExternalLinkPreview label="Portfolio" className="flex items-center gap-1" /> },
        { href:"/projects",                             label:"Projects" },
        { href:"/services",                             label:"Services" },
        { href:"/signin",                               label:"Sign in" },
    ],

    featuredBanners: [
        { label: <Card />, href:"#" },
        { label: <Card />, href:"#" },
        { label: <Card />, href:"#" },
    ],

    leftCol: { label:"", href:"#" }
}

