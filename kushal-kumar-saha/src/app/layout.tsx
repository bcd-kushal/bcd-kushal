import type { Metadata } from "next"
import { Outfit as FontSans } from "next/font/google"
import "./globals.css"
import { Footer, RightsReserved } from "@/components/global/Footer/Footer"
import { cn } from "@/lib/utils"
import { BlogsHeader } from "@/components/global/header/Header"
import { Toaster } from "@/components/ui/toaster"
import { EarthEffect, BottomGreatStar } from "@/components/global/Footer/Stars"
import { BottomLargeKushalText } from "@/components/global/Footer/logic/BottomKushalName"
import KushalKumarSVG from "../../public/logo/kushalkumar_bg_dark.svg"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })


export const metadata: Metadata = {
	title: "Kushal Kumar Saha",
	description: "Kushal Kumar Saha",
	keywords: ["kushal", "kushal kumar", "kushal saha", "kushal kumar saha", "kushal cv", "kushal resume", "kushal resume", "kushal kumar resume", "kushal kumar saha resume", "kushal blogs", "kushal kumar blogs", "kushal kumar saha blogs", "kushal professional", "kushal software developer", "kushal web developer", "kushal bot developer", "website developer", "full stack developer", "kushal kumar saha discord", "kushal kumar saha artworks", "kushal kumar saha artist", "kushalkumarsaha", "kushalkumar", "kushal kumar phone number", "kushal kumar email address", "kushal kumar contact", "kushal kumar developer", "kushal kumar interests", "kushal kumar music", "kushal kumar youtube", "kushal kumar gallery", "kushal kumar photos", "kushal kumar signin", "kushal kumar projects", "kushal kumar artworks", "kushal kumar anime", "kushal kumar commissions", "kushal kumar freelancer", "kushal kumar india", "kushal kumar age", "kushal kumar about", "kushal kumar services", "kushal kumar pricing", "kushal kumar videos", "kushal kumar github", "kushal kumar linkedin", "kushal kumar instagram"],
	robots: "index, follow",
	twitter: {
		images: ['https://github.com/bcd-kushal.png'],
		title: "Kushal Kumar Saha",
		description: "Kushal Kumar Saha",
		site: "https://kushalkumarsaha.com/"
	},
	openGraph: {
		title: "Kushal Kumar Saha",
		description: "Kushal Kumar Saha",
		url: 'https://kushalkumarsaha.com/',
		siteName: "Kushal Kumar Saha",
		type: 'website',
		countryName: 'India',
		emails: ['dev@kushalkumarsaha.com', 'am.kushal02@gmail.com', 'dev.kushal@icloud.com'],
		images: [{ url: 'https://github.com/bcd-kushal.png', username: 'Kushal Kumar Saha', href: 'https://kushalkumarsaha.com/' }],
	},
	generator: "Kushal Kumar Saha",
	referrer: 'origin-when-cross-origin',
	applicationName: "Kushal Kumar Saha",
	authors: [{ name: "Kushal Kumar Saha", url: "https://kushalkumarsaha.com/" }, { name: "Kushal", url: "https://kushalkumarsaha.com/" }],
	creator: "Kushal Kumar Saha",
	category: "Personal website",
	classification: "website",
	bookmarks: "https://kushalkumarsaha.com/",


}

export const revalidate = 600

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<head>
				<link rel="shortcut icon" href={KushalKumarSVG.src} type="image/x-icon" />
				<meta name="revisit-after" content="7 days" />
				<meta name="geo.region" content="+91" />
				<meta name="geo.placename" content="Kolkata, West Bengal" />
				<meta name="geo.position" content="25.2879° N, 83.0036° E" />
				<meta http-equiv="Cache-Control" content="max-age=3600" />
			</head>
			<body className={cn(`bg-background relative min-h-[300dvh] font-sans antialiased`, fontSans.variable)} style={{ overflowX: "hidden" }}>

				{/* ---------- header ribbon -------- */}
				<BlogsHeader />

				{/* ---------- children ------------- */}
				{children}

				{/* ---------- earth effect at bottom */}
				<BottomLargeKushalText />
				<BottomGreatStar />
				<EarthEffect />

				{/* ---------- footer area ---------- */}
				<Footer />
				<RightsReserved />
				<Toaster />
			</body>
		</html>
	)
}
