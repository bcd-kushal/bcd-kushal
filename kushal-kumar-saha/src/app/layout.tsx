import type { Metadata } from "next"
import { Outfit as FontSans } from "next/font/google"
import "./globals.css"
import { Footer, RightsReserved } from "@/components/global/footer/Footer"
import { cn } from "@/lib/utils"
import { ThemeType } from "@/utils/types/types"
import { getTheme } from "@/utils/server/theme"
import { BlogMainHeroBG } from "@/utils/decorators/uiDesigns"
import { BlogsHeader } from "@/components/blogs/header/Header"
import { BlogBluePrint } from "@/components/blogs/blueprint/Blueprint"
import { Toaster } from "@/components/ui/toaster"
import { EarthEffect, BottomGreatStar } from "@/components/global/footer/Stars"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
	title: "Blogs: Kushal Kumar Saha",
	description: "Kushal Kumar Saha's blogs",
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const theme: ThemeType = await getTheme()
	return (
		<html lang="en" className={theme} suppressHydrationWarning>
			<body className={cn(`bg-background relative min-h-[300dvh] font-sans antialiased md-blog-main-hero-design ${BlogMainHeroBG.before}`, fontSans.variable)} style={{ overflowX: "hidden" }}>
				
				{/* ---------- header ribbon -------- */}
				<BlogsHeader theme={theme} />

				{/* ---------- header ribbon -------- */}
				<BlogBluePrint>
					{children}
				</BlogBluePrint>

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
