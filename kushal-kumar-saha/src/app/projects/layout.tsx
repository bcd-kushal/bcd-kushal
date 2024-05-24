'use server'
import { ChildrenType } from "@/defaults/types/reactTypes"


export default async function ProjectsRootLayout({ children }:{ children: ChildrenType }) {

    return (
        <>
            {children}
        </>
    )
}