"use client";

import styles from "@/components/blog/blog.module.scss";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";

export const blogTabs = [
  {
    href: "/blog",
    label: "All"
  },
  {
    href: "/articles",
    label: "Articles"
  },
  {
    href: "/changelog",
    label: "Changelog"
  },

]

export function BlogTabs() {
  const pathname = usePathname();
  console.log(pathname)
  return (
      <ul className={styles.blogContainer__layout__tabs}>
        {
          blogTabs.map((tab) => (
              <li key={tab.href}
              >
                <Link href={tab.href}
                >
                  <motion.p
                      transition={{ease: "easeOut", duration: 0.3}}
                      animate={pathname.includes(tab.href) ? {
                        background: "var(--color-gray-300)",
                        color: "var(--color-gray-800)"
                      } : {
                        background: "var(--muted)",
                        color: "var(--muted-foreground)"
                      }}>
                    {tab.label}
                  </motion.p>
                </Link>
              </li>
          ))
        }
      </ul>
  )
}