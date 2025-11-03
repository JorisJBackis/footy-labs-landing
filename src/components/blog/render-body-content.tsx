import {client} from "@/sanity/lib/client";
import {Blog} from "@/sanity/types/blog";
import {PortableText} from "@portabletext/react";
import {getImageDimensions} from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";

// lazy-loaded image component

import { PortableTextComponents } from "@portabletext/react";
import {imageBuilder} from "@/sanity/sanity-utils";

const ImageComponent = ({ value }: { value: any }) => {
  if (!value?.asset?._ref) return null;

  const { width, height } = getImageDimensions(value);

  const url = imageBuilder(value).url();
  if (!url) return null;

  return (
      <div className="my-10 overflow-hidden rounded-[15px] flex items-center justify-center">
        <Image
            src={url}
            width={width}
            height={height}
            alt={value.alt || "blog image"}
            loading="lazy"
            style={{ display: "block", aspectRatio: width / height }}
        />
      </div>
  );
};

const components = {
  types: {
    image: ImageComponent,
  },
};

const RenderBodyContent = ({post}: { post: Blog }) => {
  return (
      <>
        <PortableText value={post?.body as any} components={components}/>
      </>
  );
};

export default RenderBodyContent;