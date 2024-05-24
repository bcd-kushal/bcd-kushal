import { HEADER_H3 } from "@/utils/decorators/headers"
import { ClassNameType, ChildrenType } from "@/defaults/types/reactTypes"
import Link from "next/link"
import Image from "next/image"


export interface TooltipCardProps { imgSrc:string, thumbnail?:JSX.Element, title:string, subtitle?:string, href:string }
interface TooltipCard_Props { style: 'modern' | 'classic', children: ChildrenType, className?:ClassNameType, img?: { h?:string, w?:string }, data:TooltipCardProps }
export function TooltipCard({ style, children, className, img, data }:TooltipCard_Props ) {

    if (style === 'classic')
        return (
            <div className="w-full">
                c
            </div>
        )
    

    // if not classic, then its modern style by default
    return (
        <Link href={data.href} className={`group/card cursor-pointer z-10 w-full min-w-[190px] aspect-[9/12] bg-[#fff2] rounded-[16px] grid overflow-hidden ${className} transition-all hover:shadow-[0_0_12px_0.5px_#446af370] hover:duration-700 duration-500 hover:transition-all`}>
            <div className={`*:w-full *:h-full group-hover/card:scale-110 z-[-1] duration-500 row-start-1 col-start-1`}><Image src={data.imgSrc} alt="" width={200} height={260} /></div>
            <div className="tooltip-card-gradient p-4 pb-5 row-start-1 col-start-1 flex flex-col justify-end gap-1 items-stretch ">
                <span className="text-left">{data.thumbnail}</span>
                <div className={`text-left ${HEADER_H3} font-semibold group-hover/card:text-[#ededed] duration-500 transition-colors`}>{data.title}</div>
                <span className="text-left text-[#fff7] group-hover/card:text-[#ffffff91] duration-500">{data.subtitle}</span>
            </div>
        </Link>
    )
}