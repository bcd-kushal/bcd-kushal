import { ChildrenType, ClassNameType } from "@/defaults/types/reactTypes"





export function PopupContentBox({ children, className, glassStyles }:{ children:ChildrenType, className?:ClassNameType, glassStyles?:ClassNameType }) {
    return (
        <>
            {/* content to display */}
            <div className={`light-reflect p-[18px] rounded-[16px] row-start-1 col-start-1 place-items-center text-center z-[1] bg-transparent relative backdrop-blur-md ${glassStyles}`}>
                {children}
            </div>
            
            {/* background effect */}
            <div className={`row-start-1 col-start-1 place-items-center text-center w-3/4 h-[80%] blur-[11px] brightness-[1.3] scale-x-125 scale-y-110 relative left-1/2 -translate-x-1/2 translate-y-[10px] z-[0] ${className}`}></div>
            
        </>
    )
}