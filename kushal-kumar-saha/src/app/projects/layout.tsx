'use server'

import { ChildrenType } from "@/utils/types/types"

export default async function ProjectsRootLayout({ children }:{ children: ChildrenType }) {

    return (
        <>
            {children}
        </>
    )
}