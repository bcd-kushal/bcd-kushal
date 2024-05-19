'use server'

import SigninForm from "@/components/(routes)/signin/SigninForm/SigninForm"

export default async function SigninHomePage() {

    return (
        <main className="flex flex-col items-stretch justify-start gap-7">
            <SigninForm className="flex flex-col items-start justify-start gap-7 min-w-fit md:max-w-[calc(100%_-_300px)]"/>
        </main>
    )
}