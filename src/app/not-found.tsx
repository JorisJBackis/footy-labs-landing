import {StaggeredBlurText} from "@/components/text";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
}


export default function NotFoundPage() {
  return (
      <section className={`container overflow-hidden `}>
        <h1>
          <StaggeredBlurText textArr={'Error 404. This page is not found.'
              .split(" ")
              .map(text => text + ' ')}>
          </StaggeredBlurText>
        </h1>
        <Link href="/" className="hover:text-primary hover:border-b border-primary">
          <StaggeredBlurText textArr={'Return to homepage.'
              .split(" ")
              .map(text => text + ' ')}
            initDelay={0.1+0.2+0.3}
          >
          </StaggeredBlurText>
        </Link>
      </section>
  )
}