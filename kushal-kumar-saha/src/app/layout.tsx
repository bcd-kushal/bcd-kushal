import type { Metadata } from "next"
import { Outfit as FontSans } from "next/font/google"
import "./globals.css"
import { Footer, RightsReserved } from "@/components/global/Footer/Footer"
import { cn } from "@/lib/utils"
import { BlogsHeader } from "@/components/global/header/Header"
import { Toaster } from "@/components/ui/toaster"
import { EarthEffect, BottomGreatStar } from "@/components/global/Footer/Stars"
import KushalKumarSVG from "../../public/logo/kushalkumar_bg_dark.svg"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
	title: "Kushal Kumar Saha",
	description: "Kushal Kumar Saha",
}

export const revalidate = 600

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<head><link rel="shortcut icon" href={KushalKumarSVG.src} type="image/x-icon" /></head>
			<body className={cn(`bg-background relative min-h-[300dvh] font-sans antialiased`, fontSans.variable)} style={{ overflowX: "hidden" }}>

				{/* ---------- header ribbon -------- */}
				<BlogsHeader />

				{/* ---------- children ------------- */}
				{children}

				{/* ---------- earth effect at bottom */}
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
