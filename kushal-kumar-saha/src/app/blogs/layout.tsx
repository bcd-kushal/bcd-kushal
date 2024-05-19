'use server'

import { ChildrenType } from "@/defaults/types/reactTypes"
import PageBG from "@/utils/PageBG"
import { BlogMainHeroBG } from "@/utils/decorators/uiDesigns"

export default async function BlogsRootLayout({ children }: { children: ChildrenType }) {

    return (
        <>
            <PageBG className={`md-blog-main-hero-design blog-main-hero-design ${BlogMainHeroBG.before}`} />
            {children}
        </>

    )
}