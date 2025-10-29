import styles from "@/components/blog/blog.module.scss";
import Link from "next/link";
import {BlogTabs} from "@/components/blog/tabs";


export default function AppLayout({children}: { children: React.ReactNode }) {
  return (
      <div className={`container-wrapper ${styles.blogLayout}`}>
        <div className={`container ${styles.blogContainer}`}>
          <div className={styles.blogContainer__layout}>
            <span>
            <h1>Blog</h1>
            <p>The latest news from Footy Labs</p>
            </span>
            <BlogTabs/>
          </div>
        </div>

        <div className="container">
          {children}
        </div>
      </div>
  )
}

