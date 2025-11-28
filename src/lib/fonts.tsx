import {
  Geist_Mono as FontMono,
  Geist as FontSans,
  Inter,
  Montserrat, Syne,
} from "next/font/google"
import { cn } from "@/lib/utils"


const fontSyne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"],
})

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
})

export const fontVariables = cn(
    fontMontserrat.variable,
    fontSyne.variable
)
