'use client'

import { useEffect, useState } from "react"

export default function sendSiteTraffic() {
    const [ ip, setIP ] = useState('')
    const [ data, setData ] = useState({}) 
    useEffect(() => {
        
        // get IP ----------------------------------------
        const getTrafficAnalytics = () => {
            fetch("https://api.ipify.org?format=json")
            .then(response => response.json())
            .then(data => { setIP(prev => ('ip' in data)? data.ip : "") })
            .catch(err => console.error("Failed to load ip"))
        }
        getTrafficAnalytics()

        // get battery ------------------------------------
        const getBatteryData = async () => {
            const data = ('getBattery' in navigator) ? await (navigator as any).getBattery() : ""
            return {
                charging: ('charging' in data) ? data.charging : null,
                percentage: ('level' in data) ? data.level*100 : null,
                willFullyChargeAfter: ('chargingTime' in data) ? typeof(data.chargingTime)==='number' ? data.chargingTime : null : null,
                willDischargeAfter: ('dischargingTime' in data) ? typeof(data.dischargingTime)==='number' ? data.dischargingTime : null : null,
            }	
        }
    
        const getArchitecture = () => {
            const userAgent = ('userAgent' in navigator) ? navigator.userAgent : "";
            if(Object.keys(userAgent).length===0)
                return { deviceModel: null, architecture: null }
    
            let deviceModel = null;
            let architecture = null;
    
            if (/iPhone/.test(userAgent)) { deviceModel = "iPhone" } else if (/iPad/.test(userAgent)) { deviceModel = "iPad" } else if (/Android/.test(userAgent)) { deviceModel = "Android Device" } else if (/Macintosh/.test(userAgent)) { deviceModel = "Mac" }
            if(/x32/.test(userAgent)) { architecture = "32-bit" } else if (/x64/.test(userAgent)) { architecture = "64-bit" } else if (/x128/.test(userAgent)) { architecture = "128-bit" } else if (/x256/.test(userAgent)) { architecture = "256-bit" } else if (/x512/.test(userAgent)) { architecture = "512-bit" } else if (/x1024/.test(userAgent)) { architecture = "1024-bit" }
            
            return {
                deviceModel: deviceModel,
                architecture: architecture
            }
        }



        return () => {}

    }, [])
    
    console.log(ip)

    return(null)
}