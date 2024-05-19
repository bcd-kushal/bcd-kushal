'use server'

import { ChildrenType } from "@/utils/types/types"

export default async function ContactRootLayout({ children }:{ children: ChildrenType }) {

    return (
        <>
            {children}
        </>
    )
}