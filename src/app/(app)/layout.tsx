import {SiteHeader} from "@/components/layout/site-header";
import {SiteFooter} from "@/components/layout/site-footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="bg-background relative z-10 flex min-h-svh flex-col">
        <SiteHeader />
        {/* TODO?: maybe change py */}
        <main className="flex flex-1 flex-col py-8 md:py-16 lg:py-20">{children}</main>
        <SiteFooter />
      </div>
  )
}