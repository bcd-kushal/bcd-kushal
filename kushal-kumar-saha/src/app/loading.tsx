import { ThreeDotsAnimate } from "@/components/utilities/clientSideUtilities"
import { HEADER_H2 } from "@/utils/decorators/headers"
import { RotateCwIcon } from "lucide-react"

export default function RootLoading() {
    return (
        <div className={`w-fit ${HEADER_H2} text-[#fff6] mt-[-194px] md:mt-[-60px] mb-[160px] md:mb-[40px] flex gap-2 items-center`}><span className="animate-spin"><RotateCwIcon height={25} width={25}/></span>Loading...</div>
    )
}