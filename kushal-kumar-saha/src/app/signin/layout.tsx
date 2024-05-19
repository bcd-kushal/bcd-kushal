'use server'

import { SigninHeroStructure } from "@/components/hero/SigninHero"
import { ChildrenType } from "@/defaults/types/reactTypes"
import PageBG from "@/utils/PageBG"
import { BlogMainHeroBG } from "@/utils/decorators/uiDesigns"

export default async function SigninRootLayout({ children }: { children: ChildrenType }) {

    return (
        <>  
            <PageBG className={`md-blog-main-hero-design blog-main-hero-design ${BlogMainHeroBG.before}`} />
            <SigninHeroStructure>
                {children}
            </SigninHeroStructure>
        </>

    )
}