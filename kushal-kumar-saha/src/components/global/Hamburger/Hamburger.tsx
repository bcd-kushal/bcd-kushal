'use client'
import { ClassNameType } from "@/defaults/types/reactTypes"
import { useState, useEffect, useId } from "react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { HamburgerIcon } from "@/components/global/Hamburger/logic/icon/HamburgerIcon"
import { HamburgerInsideContent } from "@/components/global/Hamburger/logic/insideContent/HamburgerInsideContent"
import { HAMBURGER_BACKDROP_SHADE } from "@/components/global/Hamburger/static/constants"



export function Hamburger({ className }: { className: ClassNameType }) {
    const [hamburgerOpen, setHamburerOpen] = useState<boolean>(false)
    const topBarId = useId()
    const bottomBarId = useId()

    useEffect(() => {
        const hamburger = {
            topBar: document.getElementById(topBarId),
            bottomBar: document.getElementById(bottomBarId)
        }

        hamburger.topBar?.animate({
            rotate: hamburgerOpen ? "45deg" : "0deg",
            transform: hamburgerOpen ? "translateX(0px)" : "translateY(-4px)",
            scale: hamburgerOpen ? "1.3" : "1"
        }, { duration: 150, fill: "forwards" })
        hamburger.bottomBar?.animate({
            rotate: hamburgerOpen ? "-45deg" : "0deg",
            transform: hamburgerOpen ? "translateX(0px)" : "translateY(4px)",
            scale: hamburgerOpen ? "1.3" : "1"
        }, { duration: 150, fill: "forwards" })
    }, [hamburgerOpen])

    return (
        <>
            <Sheet open={hamburgerOpen} onOpenChange={()=>setHamburerOpen(prev=>!prev)} >
                <SheetTrigger className="md:hidden">
                    <span className={`p-1 translate-y-[2px] ${className}`}>
                        <HamburgerIcon topBarId={topBarId} bottomBarId={bottomBarId} />
                    </span>
                </SheetTrigger>
                <SheetContent side={"top"} className="backdrop-blur-md w-screen h-screen bg-transparent p-0 outline-none md:hidden">
                    <aside className={`w-full h-full max-h-[100dvh] pt-16 px-4 pb-4 ${HAMBURGER_BACKDROP_SHADE}`}>
                        <HamburgerInsideContent onClick={setHamburerOpen} />
                    </aside>
                </SheetContent>
            </Sheet>
        </>
    )
}