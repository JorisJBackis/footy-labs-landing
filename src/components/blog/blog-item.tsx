import {Blog} from "@/sanity/types/blog";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {imageUrlFor} from "@/sanity/sanity-utils";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ArrowRight} from "lucide-react";

export function BlogItem({blog}: { blog: Blog }) {
  console.log(blog);
  const imageUrl = blog.mainImage ? imageUrlFor(blog.mainImage, 400, 300) : "/placeholder.png";
  console.log(blog)
  return (
      <Link
          href={`/blog/${blog.slug.current}`}
          className="hover:opacity-80 transition-opacity"
      >
        <article className={"flex flex-col gap-(--space-sm) sm:flex-row sm:justify-between items-center"}>

          <p className=" font-normal text-sm text-gray-600">
            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })}
          </p>
          <h3 className=" text-2xl font-bold tracking-tight text-gray-700">
            {blog.title}
          </h3>
          {/*<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">*/}
          {/*  <Image*/}
          {/*      src={imageUrl}*/}
          {/*      alt={blog.mainImage?.alt || blog.title}*/}
          {/*      fill*/}
          {/*      className="object-cover"*/}
          {/*  />*/}
          {/*</div>*/}
          <p className=" font-normal text-gray-600 sm:max-w-1/3 text-center sm:text-start">
            {blog.metadata?.slice(0, 140)}
          </p>
        </article>
      </Link>
  );
}

export function ChangelogItem({blog}: { blog: Blog }) {
  const imageUrl = blog.mainImage ? imageUrlFor(blog.mainImage, 400, 300) : "/placeholder.png";

  return (
      <Link
          href={`/blog/${blog.slug.current}`}
          className="basis-1/4  block  rounded-lg hover:bg-gray-100 overflow-hidden shadow  transition-colors"
      >
        <article className="flex flex-col">
          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            {/*<div className="bg-red-400 w-full h-full">*/}
            {/**/}
            {/*</div>*/}
            <Image
                src={imageUrl}
                alt={blog.mainImage?.alt || blog.title}
                fill
                className="block"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col gap-2 border-t">
            <p className="text-xs text-muted-foreground">
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </p>
            <h3 className="text-lg font-semibold">
              {blog.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {blog.metadata?.slice(0, 140)}...
            </p>
          </div>
        </article>
      </Link>
  );
}


export function ChangelogItemList({blog}: { blog: Blog }) {
  return (
      <div className="relative group">
        {/* Timeline dot */}
        <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-primary border-4 border-background z-10"/>

        {/* Content */}
        <div className="ml-10 pb-12">
          <time
              className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 block">{blog.publishedAt}</time>

          <Card
              className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 group-hover:border-primary/20">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-3">

                <h3 className="text-xl font-semibold leading-tight text-balance group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>

                {blog.metadata && (
                    <p className="text-muted-foreground leading-relaxed text-pretty">{blog.metadata}</p>
                )}

                {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {blog.tags.map((tag, index) => (
                          <span key={index} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                      {tag}
                    </span>
                      ))}
                    </div>
                )}
              </div>

              <ArrowRight
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"/>
            </div>
          </Card>
        </div>
      </div>
  )
}