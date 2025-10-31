import {getPostBySlug} from "@/sanity/sanity-utils";
import RenderBodyContent from "@/components/blog/render-body-content";

export default async function SingleBlogPage({params}: { params: any }) {
  const {slug} = await params;
  const post = await getPostBySlug(slug);

  return (
      <div className="container-wrapper">
        <article className="container">
          <div className="mb-5">
            <h1 className="text-3xl py-2">{post.title}</h1>
            <p className="pb-1">
              <span className="font-medium">Published: </span>
              {new Date(post.publishedAt).toDateString()}
              <span className="font-medium pl-2">by </span>
              {post.author.name}
            </p>

            <p>{post.metadata}</p>
          </div>

          <article className="prose lg:prose-xl">
            <RenderBodyContent post={post}/>
          </article>
        </article>
      </div>
  );
};