import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {siteConfig} from '@/lib/config';
import {Icons} from '@/components/icons';
import {MainNav} from '@/components/layout/main-nav';
import {MobileNav} from './mobile-nav';
import {Separator} from "@/components/ui/separator";
import {ModeToggleInstant} from "@/components/layout/mode-toggle";
import {toast} from "sonner";

export function SiteHeader() {
  return (
      <header className="bg-background sticky top-0 z-50 w-full border border-b">
        <div className="container-wrapper 3xl:px-0 px-6">
          <div
              className="3xl:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
            <MobileNav
                items={siteConfig.navItems}
                className="flex lg:hidden"
            />
            <Button
                asChild
                variant="ghost"
                size="icon"
                className="hidden size-10 lg:flex"
            >
              <Link href="/" className="flex">
                <Icons.logo className="size-8 text-primary"/>
                <span className="sr-only">{siteConfig.name}</span>
              </Link>
            </Button>
            <MainNav items={siteConfig.navItems} className="hidden lg:flex"/>
            <div className="ml-auto flex items-center md:flex-1 md:justify-end gap-2">
              {/*<div>*/}
              {/*  <CommandMenu/>*/}
              {/*</div>*/}
              {/*<ModeToggleInstant/>*/}
              {/*<Separator orientation="vertical"/>*/}
              <Button variant="outline" className="hidden sm:inline-flex">
                <Link href={siteConfig.links.signUp}>
                  Sign Up
                </Link>
              </Button>
              <Button
              //     onClick={() => {
              //   toast.message("Book a demo is under development")
              // }}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </header>
  );
}