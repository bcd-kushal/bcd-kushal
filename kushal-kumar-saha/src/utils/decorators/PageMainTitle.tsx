'use server'
import { ClassNameType } from "@/defaults/types/reactTypes"
import { textGradientInit, textGradientShade } from "./textGradients"
import { HEADER_H1 } from "./headers"

export default async function PageTitle({ className, title }:{ className?:ClassNameType, title:string }) {
    return ( <h1 className={`title-gradient my-6 pb-[10.4px] ${textGradientInit} ${HEADER_H1} ${textGradientShade} ${className}`}>{title}</h1> )
}