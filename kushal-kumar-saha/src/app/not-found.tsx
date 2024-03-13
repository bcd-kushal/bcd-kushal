'use client'
import Link from 'next/link'
import { useToast } from "@/components/ui/use-toast"
import { useEffect, useState } from 'react'
import { HEADER_H2, HEADER_H3 } from '@/utils/decorators/headers'
import { useRouter } from 'next/navigation'

const TIME_IN_SECS_TILL_HOME_REDIRECT = 7

export default function NotFound() {
    const { toast } = useToast()
    const router = useRouter()
    const [timer,setTimer] = useState(TIME_IN_SECS_TILL_HOME_REDIRECT)
    
    useEffect(()=>{ toast({ title:"Invalid route", description:"This page does not exist", variant:"destructive" }) },[])
    useEffect(()=>{
        const countdown = setInterval(()=>{ timer<=0 ? router.replace("/") : setTimer(prev=>prev-1) }, 1000 )
        return ()=>clearTimeout(countdown)
    },[timer])

    return (
        <div className="w-fit mt-[-220px] mb-[150px] md:mt-[-86px] md:mb-5">
            <h2 className={`w-fit ${HEADER_H2} text-[#f39fc699]`}>Not Found</h2>
            <Link href="/" className="text-[#f39fc660]">Returning home in {timer}...</Link>
        </div>
    )
}