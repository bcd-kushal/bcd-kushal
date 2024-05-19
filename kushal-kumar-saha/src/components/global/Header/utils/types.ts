import { ClassNameType } from "@/defaults/types/reactTypes"

export type HeaderDataType = { label: keyof headerDataProps, className: ClassNameType }[]
export interface headerValueProps { title: string | JSX.Element, content: JSX.Element, href: string }


export interface headerDataProps {
    kushalkumar: headerValueProps,
    projects: headerValueProps,
    interests: headerValueProps,
    connect: headerValueProps,
    blogs: headerValueProps,
    services: headerValueProps,
    portfolio: headerValueProps,
    signin: headerValueProps,
    gallery: headerValueProps,
}
