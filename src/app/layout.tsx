import type {Metadata} from "next";
import "../styles/globals.css";
import {cn} from "@/lib/utils";
import {fontVariables} from "@/lib/fonts";
import {ThemeProvider} from "@/components/layout/theme-provider";
import {Toaster} from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Footy Labs",
  description: "Footy Labs - platform for players, agents and clubs",
  icons: {
    icon: '/favicon.png',
  }
};
export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body
          className={cn(
              'text-foreground font-sans antialiased group/body overscroll-none  [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*16)] xl:[--footer-height:calc(var(--spacing)*24)]',
              fontVariables,
          )}
      >
      <ThemeProvider>
          {children}
        <Toaster position="top-center"/>
      </ThemeProvider>
      </body>
      </html>
  );
}