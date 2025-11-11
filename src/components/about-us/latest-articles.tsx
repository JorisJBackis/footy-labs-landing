import React from "react";
import {BlogItem} from "@/components/blog/blog-item";
import {Separator} from "@/components/ui/separator";
import {getArticles} from "@/sanity/sanity-utils";

export async function LatestArticles() {
  const articles = await getArticles();
  return (
      <div className="flex flex-col gap-(--space-md)">
        <h2>Latest articles</h2>
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
  )
}