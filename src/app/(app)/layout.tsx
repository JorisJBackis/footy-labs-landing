import {SiteHeader} from "@/components/layout/site-header";
import {SiteFooter} from "@/components/layout/site-footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="bg-background relative z-10 flex min-h-svh flex-col">
        <SiteHeader />
        {/* TODO: make max-w-1024px and remove/change px py*/}
        <main className="flex flex-1 flex-col px-6">{children}</main>
        <SiteFooter />
      </div>
  )
}