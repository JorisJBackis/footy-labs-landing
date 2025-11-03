import {UnderDevelopment} from "@/components/under-development";
import styles from "@/components/blog/blog.module.scss";
import {getArticles, getChangelogPosts} from "@/sanity/sanity-utils";
import {BlogItem, ChangelogItem} from "@/components/blog/blog-item";
import Link from "next/link";
import {ChevronRightIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";
import React from "react";

export default async function AllBlogsPage() {
  const changelogPosts = await getChangelogPosts();
  const articles = await getArticles();
  console.log({changelogPosts});

  return (
      <div className="flex flex-col gap-(--space-xl)">
        <div>
          {articles?.length > 0 ? (
              articles.slice(0, 8).map((post, index) => (
                  <React.Fragment key={index}>
                    <BlogItem blog={post}/>
                    {index !== 8 && index !== articles.length - 1 && < Separator className="my-(--space-md)"/>}
                  </React.Fragment>
              ))
          ) : (<p>No articles found.</p>)
          }
        </div>
        <div className="flex flex-col gap-(--space-md)">
          <div className="flex justify-between items-center text-muted-foreground">
            <h4>Changelog</h4>
            <Link href="/changelog"
                  className="flex items-center gap-1 text-base leading-none"><span>All updates</span>
              <ChevronRightIcon size={16}/></Link>
          </div>
          <div
              className={cn("flex gap-(--space-sm) items-center",
                  changelogPosts?.length > 3 ? "justify-between" : "justify-start")}>
            {changelogPosts?.length > 0 ? (
                changelogPosts.slice(0, 4).map((post, index) => (
                    <ChangelogItem key={index} blog={post}/>
                ))
            ) : (<p>No changelogPosts found.</p>)
            }
          </div>
        </div>
      </div>
  );
}
