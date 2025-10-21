import {
  Geist_Mono as FontMono,
  Geist as FontSans,
  Inter,
  Montserrat,
} from "next/font/google"
import { cn } from "@/lib/utils"


const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
})

export const fontVariables = cn(
    fontMontserrat.variable
)
