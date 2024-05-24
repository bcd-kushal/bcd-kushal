'use client'

import { useEffect, useRef } from "react"

const SCROLL_RATE_FACTOR = 0.85

export function BottomLargeKushalText() {
    const bottomTextRef = useRef(null)
    useEffect(()=>{
        addEventListener("scroll",()=>{
            if(bottomTextRef.current) {
                const bottomText = (bottomTextRef.current as HTMLElement)
                bottomText.scrollTop += SCROLL_RATE_FACTOR
            }
        })
        // return () => {}
    },[])
    return (
        <h1 ref={bottomTextRef} className="absolute z-[1] overflow-scroll text-white/5  text-[300px] bottom-[80px] w-[1096px] max-w-[99dvw] left-1/2 -translate-x-1/2 tracking-[-6px]">
            Kushal
        </h1>
    )
}