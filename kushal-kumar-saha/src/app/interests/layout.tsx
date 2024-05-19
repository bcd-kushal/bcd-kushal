'use server'

import { ChildrenType } from "@/utils/types/types"

export default async function InterestsRootLayout({ children }:{ children: ChildrenType }) {

    return (
        <>
            {children}
        </>
    )
}