"use client"
import "./rightSide.css"
import MyServices from "@/data/services"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function MainPageRightSide() {

    const SERVICES = MyServices()
    const my_emailid = "dev@kushalkumarsaha.com"
    
    const inlineStyles = {
        nofill: {
            fill: "none"
        },
        pt2: {
            paddingTop: "2px"
        },
        customFill: {
            fill: "#44444495"
        }
    }
    
    function useCookie(cookieName:string, defaultValue:string) {
        const [cookieValue, setCookieValue] = useState(() => {
            const cookie = getCookie(cookieName)
            return (cookie==="")? defaultValue : cookie
        })
        
        useEffect(() => {
            setCookie(cookieName, cookieValue, 0.5)
        }, [cookieName, cookieValue])
        
        return [cookieValue, setCookieValue]
    }

    function getCookie(cookieName:string) {
        const name = `${cookieName}=`
        const decodedCookie = decodeURIComponent(document.cookie)
        const cookieArray = decodedCookie.split(';')
        for(let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i]
            while (cookie.charAt(0) === ' ') 
                cookie = cookie.substring(1)
            if (cookie.indexOf(name) === 0) 
                return cookie.substring(name.length, cookie.length)
        }
        return ""
    }
    
    const [ currTag, setCurrTag ] = useCookie("tag","All")
    
    function setCookie(cookieName:string, cookieValue:string, expirationDays:number){
        let d = new Date()
        d.setTime(d.getTime() + (expirationDays*24*60*60*1000))
        const expires = `expires=${d.toUTCString()}`
        document.cookie = `${cookieName}=${cookieValue};${expires};path=/`
    }

    useEffect(() => {
        document.querySelectorAll(".rcm-filter").forEach( filter => {
            if(filter.textContent===currTag)
                filter.classList.contains("rcm-filter-active")? "" : filter.classList.add("rcm-filter-active")
            else
                filter.classList.contains("rcm-filter-active")? filter.classList.remove("rcm-filter-active") : ""

        })

        document.querySelectorAll(".rcm-tab").forEach( tab => {
            if(currTag==="All")
                tab.style.display = "flex"
            else
                (tab.classList.contains(currTag)) ? tab.style.display = "flex" : tab.style.display = "none"
        })

        setCookie("tag",currTag,0.5)
    }, [ currTag ])
    

    return (
        <>
            <div className="rcm-sticky">
                <div className="rcm-filter" onClick={()=>{setCurrTag(prev=>"All")}}>All</div>
                <div className="rcm-filter" onClick={()=>{setCurrTag(prev=>"Software")}}>Software</div>
                <div className="rcm-filter" onClick={()=>{setCurrTag(prev=>"Discord")}}>Discord</div>
                <div className="rcm-filter" onClick={()=>{setCurrTag(prev=>"Art")}}>Art</div>
                <div className="rcm-filter" onClick={()=>{setCurrTag(prev=>"Editing")}}>Editing</div>
                {/* <div className="rcm-filter">1:1 Call</div> */}
            </div>


            <div className="rcm-tabs">
                
                {SERVICES.map((service) => (

                    <Link key={service.booking_name} className={`rcm-tab ${service.tag}`} href={`mailto:${my_emailid}?subject=${encodeURIComponent(service.emailSubject)}&body=${encodeURIComponent(service.emailBody)}`}>
                        <div className="rcm-tab-top">
                            <div className="rcm-tab-top1">
                                <div className="rcm-tab-tag">
                                    <div className="rcm-tab-tag-icon" style={inlineStyles.pt2}><svg xmlns="http://www.w3.org/2000/svg" style={inlineStyles.customFill} height="16" width="14" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg></div>
                                    <div className="rcm-tab-tag-label">{service.tag}</div>
                                </div>
                                <div className="rcm-tab-go">
                                    <svg stroke="currentColor" style={inlineStyles.nofill} strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fontSize="40" className="sc-arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>
                                </div>
                            </div>
                            <div className="rcm-tab-top2">
                                {service.booking_name}
                            </div>
                            {service.description !== null ? (
                                <div className="rcm-tab-top3">
                                    {service.description}
                                </div>
                            ) : (<></>)}
                        </div>

                        <div className="rcm-tab-bottom">
                            <div className="rcm-tab-bottom-left">{service.time}</div>
                            <div className="rcm-tab-bottom-right">{service.price}</div>
                        </div>
                    </Link>
                ))}
            </div>


            <div className="rcm-about-me">
                <div className="rcm-am-title">About Me</div>
                <div className="rcm-am-desc">
                    Hi, myself Kushal Kumar. I'm an interactive flexible tech stack software engineer 
                    with years of experience in web development, building scalable,
                    responsive, UI-centric websites for clients.
                    <br /><br />
                    One is well versed with Photoshop and Clip Studio, to create 
                    industry-ready seamless alluring softwares solutions. 
                </div>
            </div>

        </>
    )
}