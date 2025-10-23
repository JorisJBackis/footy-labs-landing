import {ModeToggleInstant} from '@/components/layout/mode-toggle';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {siteConfig} from '@/lib/config';
// import {Icons} from '@/components/ui/icons';
import {MainNav} from '@/components/layout/main-nav';
import {Separator} from '@/components/ui/separator';
import {MobileNav} from './mobile-nav';

export function SiteHeader() {
  return (
      <header className="bg-background sticky top-0 z-50 w-full border border-b">
        <div className="container-wrapper 3xl:px-0 px-6">
          <div
              className="3xl:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
            <MobileNav
                tree={{children: []} as any}
                items={siteConfig.navItems}
                className="flex lg:hidden"
            />
            <Button
                asChild
                variant="ghost"
                size="icon"
                className="hidden size-8 lg:flex"
            >
              <Link href="/" className="bg-blue-900">
                {/*<Icons.logo className="size-5"/>*/}
                <span className="sr-only">{siteConfig.name}</span>
              </Link>
            </Button>
            <MainNav items={siteConfig.navItems} className="hidden lg:flex"/>
            <div className="ml-auto flex items-center md:flex-1 md:justify-end gap-2">
              {/*<div>*/}
              {/*  <CommandMenu/>*/}
              {/*</div>*/}
              {/*<Separator orientation="vertical"/>*/}
              <ModeToggleInstant/>

            </div>
          </div>
        </div>
      </header>
  );
}