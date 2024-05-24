'use server'

import { ChildrenType } from "@/defaults/types/reactTypes"

export default async function ContactRootLayout({ children }:{ children: ChildrenType }) {

    return (
        <>
            {children}
        </>
    )
}