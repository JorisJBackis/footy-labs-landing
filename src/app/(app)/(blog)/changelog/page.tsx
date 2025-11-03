import {UnderDevelopment} from "@/components/under-development";
import {getArticles, getChangelogPosts} from "@/sanity/sanity-utils";
import {BlogItem} from "@/components/blog/blog-item";
import React from "react";
import {Separator} from "@/components/ui/separator";

export default async function ChangelogPage() {
  const posts = await getChangelogPosts();

  return (
      <div>
        {posts?.length > 0 ? (
            posts.map((post, index) => (
                <React.Fragment key={index}>
                  <BlogItem blog={post}/>
                  {index !== posts.length - 1 && < Separator className="my-(--space-md)"/>}
                </React.Fragment>
            ))
        ) : (<p>No posts found.</p>)
        }
      </div>
  );
}