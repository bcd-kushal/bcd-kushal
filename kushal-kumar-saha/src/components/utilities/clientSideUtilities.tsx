'use client'
import { toggleTheme } from "@/utils/server/theme"
import { ThemeType } from "@/defaults/types/commonTypes"
import { CloudMoonIcon, CloudSunIcon } from "lucide-react"
import { useEffect, useState } from "react"



export const ThemeButton = ({theme}:{theme:ThemeType}) => {
    return( <span className="cursor-pointer" onClick={()=>toggleTheme()}>{ theme==='dark' ? <CloudMoonIcon/> : <CloudSunIcon/> }</span> )
}



export const ThreeDotsAnimate = () => {
    const [dotsOnDisplay, setDotsOnDisplay] = useState(".")
    useEffect(()=>{ 
        const dotsTimer = setInterval(()=>{ setDotsOnDisplay(prev => (prev+".").length>3 ? "" : prev+".")}, 50)
        return  ()=>clearTimeout(dotsTimer)
    }, [dotsOnDisplay])
    return( <span>{dotsOnDisplay}</span> )
}