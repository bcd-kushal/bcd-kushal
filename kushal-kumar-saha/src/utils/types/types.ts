import { headerDataProps } from "@/components/blogs/header/headerComponents"
import React from "react"

export type ClassNameType               = string 
export type ChildrenType                = Readonly<React.ReactNode>

export type ThemeType                   = 'light' | 'dark'
export type HeaderLinkTypes             = keyof headerDataProps



