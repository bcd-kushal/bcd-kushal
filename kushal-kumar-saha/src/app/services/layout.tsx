'use server'
import { ChildrenType } from "@/defaults/types/reactTypes"


export default async function ServiceRootLayout({ children }:{ children: ChildrenType }) {

    return (
        <>
            {children}
        </>
    )
}