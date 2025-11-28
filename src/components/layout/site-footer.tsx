"use client";

import {Logo} from "@/components/logo";
import {ModeToggleInstant} from "@/components/layout/mode-toggle";
import {useEffect, useState} from "react";
import {siteConfig} from "@/lib/config";
import {spans} from "next/dist/build/webpack/plugins/profiling-plugin";
import Link from "next/link";
import {cn} from "@/lib/utils";

export function SiteFooter() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect
  (() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
      <footer
          className="dark:bg-transparent border border-t py-14">
        <div className="container-wrapper px-4 xl:px-6">
          <div className="grid grid-cols-2 sm:grid-rows-1 sm:grid-cols-4 min-h-(--footer-height) gap-6">
            <div className="flex flex-col gap-3 sm:gap-6">
              <Logo className="size-10"/>
              <ModeToggleInstant/>
              <span
                  className="text-muted-foreground leading-loose sm:text-sm text-xs">{`© ${year}. Footy Labs Inc.`}</span>
            </div>
            {siteConfig.footerItems.map((footerItem, index) => (
                <div className={cn("min-h-full flex flex-col gap-2 text-xs sm:text-sm justify-start")} key={`${footerItem.title}${index}`}>
                  <span className="font-semibold">{footerItem.title}</span>
                  <div className="flex flex-col gap-1">
                  {footerItem.navItems.map((navItem, _) => (
                    <Link href={navItem.href} key={navItem.href}>
                      {navItem.label}
                    </Link>
                  ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </footer>
  );
}