import {UnderDevelopment} from "@/components/under-development";
import styles from "@/components/blog/blog.module.scss";
import {getPosts} from "@/sanity/sanity-utils";
import {BlogItem} from "@/components/blog/blog-item";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
      <div>
        {posts?.length > 0 ? (
            posts.map((post, index) => (
                <BlogItem key={index} blog={post}/>
            ))
        ) : (<p>No posts found.</p>)
        }
      </div>
  );
}
