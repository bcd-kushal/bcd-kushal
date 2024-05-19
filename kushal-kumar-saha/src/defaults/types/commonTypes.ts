import { ClassNameType } from "./reactTypes"
import { headerDataProps } from "@/components/global/header/logic/headerComponents"

export type ThemeType                   = 'light' | 'dark'
export type SVGType                     = { dimensions?:string|number, fill?:string, stroke?:string|number, strokeWidth?:string|number, className?:ClassNameType }
export type HeaderLinkTypes             = keyof headerDataProps

