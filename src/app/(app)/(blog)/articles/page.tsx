import {getArticles} from "@/sanity/sanity-utils";
import {BlogItem} from "@/components/blog/blog-item";

export default async function ArticlesPage() {
  const posts = await getArticles();

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