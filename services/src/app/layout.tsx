import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MainPageLeftSide from "@/components/mainPage/leftSide"
import "@/components/mainPage/rightSide.css"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Services: Kushal Kumar Saha",
    description: "All of Kushal Kumar Saha services in one place to reach out",
    keywords: ["services", "kushal", "kushal kumar", "kushal saha", "kushal kumar saha", "kushal services", "kushal kumar services", "kushal saha services", "kushal kumar saha services", "cv", "resume", "kushal resume", "kushal kumar resume", "kushal kumar saha resume", "kushal cv", "kushal kumar cv", "kushal kumar saha cv", "kushal professional", "kushal software developer", "kushal web developer", "kushal automation devloper", "website developer", "full stack developer", "kushal kumar saha discord", "kushal kumar saha artworks", "kushal kumar saha artist", "kushalkumarsaha"],
    robots: "index, follow",
    twitter: {
        images: ['https://github.com/bcd-kushal.png'],
        title: "Kushal Kumar Saha: Services",
        description: "All of Kushal Kumar Saha services in one place to reach out",
        site: "https://services.kushalkumarsaha.com/"
    },
    openGraph: {
        type: 'website',
        url: 'https://services.kushalkumarsaha.com/',
        countryName: 'India',
        emails: ['dev@kushalkumarsaha.com', 'am.kushal02@gmail.com', 'dev.kushal@icloud.com'],
        images: ['https://github.com/bcd-kushal.png'],
        siteName: "Services: Kushal Kumar Saha",
        title: "Kushal Kumar Saha: Services",
        description: "All of Kushal Kumar Saha services in one place to reach out",
    },
    generator: "Kushal Kumar Saha",
    referrer: 'origin-when-cross-origin',
    applicationName: "Services: Kushal Kumar Saha",
    authors: [{name:"Kushal Kumar Saha", url:"https://kushalkumarsaha.com/"},{name:"Kushal", url:"https://kushalkumarsaha.com/"}],
    creator: "Kushal Kumar Saha",
    category: "Services",
    classification: "website",
    bookmarks: "https://services.kushalkumarsaha.com/"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head><link href="favicon.ico" rel="icon"/></head>
            <body className={inter.className}>
                <main className={styles.parentContainer}>

                    <section className={styles.lcm}>
                        <MainPageLeftSide />
                    </section>

                    <section className={styles.rcm}>
                        {children}
                        <div className="rcm-about-me">
                            <div className="rcm-am-title">About Me</div>
                            <div className="rcm-am-desc">
                                Hi, myself Kushal Kumar. I&apos;m an interactive flexible tech stack software engineer
                                with years of experience in web development, building scalable,
                                responsive, UI-centric websites for clients.
                                <br /><br />
                                One is well versed with Photoshop and Clip Studio, to create
                                industry-ready seamless alluring softwares solutions.
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </html>
    )
}
