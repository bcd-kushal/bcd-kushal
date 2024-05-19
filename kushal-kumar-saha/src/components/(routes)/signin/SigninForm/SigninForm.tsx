'use client'
import { ClassNameType, SetStateType } from "@/defaults/types/reactTypes"
import { useEffect, useState } from "react"
import { formInputStyles } from "./utils/styles"


export default function SigninForm({ className }:{ className?:ClassNameType }) {
    const [ submitClicked, setSubmitClicked ] = useState<boolean>(false)
    const [ usernameEmpty, setUsernameEmpty ] = useState<boolean>(true)
    const [ passwordEmpty, setPasswordEmpty ] = useState<boolean>(true)
    const usernameName = "__kks_username__"
    const passwordName = "__kks_password__"
    const handleFormSubmit = async (formData:FormData) => {
        const username = formData.get(usernameName) as string
        const password = formData.get(passwordName) as string
        console.table({user:username,pass:password})
    }
    return (
        <form action={handleFormSubmit} className={className}>
            <InputForm type="text"      name={usernameName} placeholder="Username" className={`${formInputStyles}`} setParentState={setUsernameEmpty} />
            <InputForm type="password"  name={passwordName} placeholder="Password" className={`${formInputStyles}`} setParentState={setPasswordEmpty} />
            <button type="submit" className={`absolute bottom-[6px] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 p-3 md:pl-0 md:bottom-4 text-3xl text-[#808af250] transition-all duration-300 hover:text-[#4e4eda]  ${passwordEmpty || usernameEmpty ? "opacity-0 translate-y-[100dvh]" : "-translate-y-0 opacity-100"}`} onClick={()=>setSubmitClicked(prev=>true)} disabled={submitClicked}>Sign in</button>
        </form>
    )
}


// FORM INPUT STYLES ============================================================================

type FormInputType = "text" | "password" | "number"

const InputForm = ({ type, name, placeholder, setParentState, className }:{ type:FormInputType, name:string, placeholder?:string, setParentState?:SetStateType<boolean>, className?:string }) => {
    const [ emptyField, setEmptyField ] = useState<boolean>(true)
    useEffect(() => {
        if(setParentState) 
            setParentState(prev => emptyField)
    }, [emptyField])
    return (
        <div className="relative group grid *:row-start-1 *:col-start-1 min-w-[280px]">
            <input type={type} name={name} onChange={(e)=>setEmptyField(prev=>e.target.value ? false : true)} className={`peer z-20 autofill:bg-[#0000] autofill:text-white text-lg ${formInputStyles}`} />
            <span className="peer-focus:w-2 peer-focus:-bottom-[1px] md:peer-focus:-bottom-[2px] aspect-square bg-white w-1 absolute bottom-[0.5px] md:-bottom-[0.5px] input-square transition-all duration-150"></span>
            <span className="input-line-dash-cover absolute bottom-[2px] md:bottom-[1px] left-0 w-0 h-[1px] bg-[#777] z-10"></span>
            <span className="absolute bottom-[2px] md:bottom-[1px] left-0 h-[1px] bg-gradient-to-r from-white/50 to-transparent transition-all duration-300 border-span-animate"></span>
            <span className={`peer-focus:px-3 h-full text-lg flex items-center justify-start transition-all duration-200 ${!emptyField? "-translate-y-[26px] text-xs" : ""}`}>{placeholder}</span>
        </div>
    )
}   