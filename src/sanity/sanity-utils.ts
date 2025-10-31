import ImageUrlBuilder from "@sanity/image-url";
import {type QueryParams} from "next-sanity";
import {postQueryBySlug, postsByCategorySlugQuery} from "./sanity-query";
import {Blog} from "@/sanity/types/blog";
import {client} from "@/sanity/lib/client";


export function imageBuilder(source: string) {
  return ImageUrlBuilder(client).image(source);
}

export async function sanityFetch<QueryResponse>({
                                                   query,
                                                   qParams,
                                                   tags,
                                                 }: {
  query: string,
  qParams: QueryParams,
  tags: string[],
}): Promise<QueryResponse> {
  return (
      client.fetch <
          QueryResponse>
      (query,
          qParams,
          {
            cache: "force-cache",
            next: {tags},
          })
  );
}

export const getPostsByCategory = async (categorySlug: string) => {
  return sanityFetch<Blog[]>({
    query: postsByCategorySlugQuery,
    qParams: {categorySlug},
    tags: ["post", categorySlug],
  });
};

export const getArticles = async () => getPostsByCategory("articles");
export const getChangelogPosts = async () => getPostsByCategory("changelog");

export const getPostBySlug = async (slug: string) => {
  const data: Blog = await sanityFetch({
    query: postQueryBySlug,
    qParams: {slug},
    tags: ["post", "author", "category"],
  });

  return data;
};