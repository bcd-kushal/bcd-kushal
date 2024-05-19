import { ClassNameType } from "@/defaults/types/reactTypes"



export default async function PageBG({ className }:{ className:ClassNameType }) {
    return (<div className={`absolute w-screen h-[200dvh] bg-transparent top-0 ${className}`}></div>)
}