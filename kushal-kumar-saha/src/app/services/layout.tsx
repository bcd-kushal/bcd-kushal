'use server'

import { ChildrenType } from "@/utils/types/types"

export default async function ServiceRootLayout({ children }:{ children: ChildrenType }) {

    return (
        <>
            {children}
        </>
    )
}