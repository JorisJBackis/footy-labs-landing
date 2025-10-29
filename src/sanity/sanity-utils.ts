import ImageUrlBuilder from "@sanity/image-url";
import {createClient, type QueryParams} from "next-sanity";
import {postQuery, postQueryBySlug} from "./sanity-query";
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

export const getPosts = async () => {
  const data: Blog[] = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ["post", "author", "category"],
  });
  return data;
};

export const getPostBySlug = async (slug: string) => {
  const data: Blog = await sanityFetch({
    query: postQueryBySlug,
    qParams: {slug},
    tags: ["post", "author", "category"],
  });

  return data;
};