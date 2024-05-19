'use server'

import SigninForm from "@/components/(routes)/signin/SigninForm/SigninForm"

export default async function SigninHomePage() {

    return (
        <main className="flex flex-col items-stretch justify-start gap-7">
            <SigninForm className="relative flex flex-col items-start justify-start gap-7 min-w-fit h-[calc(100dvh_-_460px)] md:h-[301px] md:max-w-[calc(100%_-_300px)] -mt-[calc(100dvh_-_460px)] md:mt-[-301px] "/>
        </main>
    )
}