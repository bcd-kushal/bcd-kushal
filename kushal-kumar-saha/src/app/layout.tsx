import type { Metadata } from "next"
import { Outfit as FontSans } from "next/font/google"
import "./globals.css"
import { Footer, RightsReserved } from "@/components/global/Footer/Footer"
import { cn } from "@/lib/utils"
import { ThemeType } from "@/defaults/types/commonTypes"
import { getTheme } from "@/utils/server/theme"
import { BlogsHeader } from "@/components/global/header/Header"
import { Toaster } from "@/components/ui/toaster"
import { EarthEffect, BottomGreatStar } from "@/components/global/Footer/Stars"
import KushalKumarSVG from "../../public/logo/kushalkumar_bg_dark.svg"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
	title: "Kushal Kumar Saha",
	description: "Kushal Kumar Saha",
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const theme: ThemeType = await getTheme()
	return (
		<html lang="en" className={theme} suppressHydrationWarning>
			<head><link rel="shortcut icon" href={KushalKumarSVG.src} type="image/x-icon" /></head>
			<body className={cn(`bg-background relative min-h-[300dvh] font-sans antialiased`, fontSans.variable)} style={{ overflowX: "hidden" }}>
				
				{/* ---------- header ribbon -------- */}
				<BlogsHeader theme={theme} />

				{/* ---------- children ------------- */}
				{children}

				{/* ---------- earth effect at bottom */}
				<BottomGreatStar/>
				<EarthEffect/>

				{/* ---------- footer area ---------- */}
				<Footer theme={theme} />
				<RightsReserved/>
				<Toaster/>
			</body>
		</html>
	)
}
