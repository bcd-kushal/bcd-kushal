'use server'

import { ChildrenType } from "@/defaults/types/reactTypes"

export default async function InterestsRootLayout({ children }:{ children: ChildrenType }) {

    return (
        <>
            {children}
        </>
    )
}