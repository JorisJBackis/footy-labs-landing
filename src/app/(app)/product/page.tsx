import {UnderDevelopment} from "@/components/under-development";
import {Bento} from "@/components/home/bento/bento";
import {PricingCards} from "@/components/pricing/page";
import {plans} from "@/lib/plans";
import {siteConfig} from "@/lib/config";
import Link from "next/link";

export default function ProductPage() {
  return (
      <div className="container-wrapper flex flex-col gap-(--space-xl)">
        <div className="container flex flex-col gap-(--space-md)">
          <h1 className="text-center">Footy Labs - a platform for everyone involved in football</h1>
          <Bento bentoUniqueId={"product-page"}/>
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-(--space-xl)">
            <h2 className="font-bold tracking-tight text-balance mb-4">Plans and Pricing</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Choose the plan that fits your role. Start with a free trial and upgrade anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <PricingCards plans={plans}/>

          {/* Footer Note */}
          <div className="mt-(--space-xl) text-center">
            <p className="text-sm text-muted-foreground">
              {`All plans include a 14-day free trial. `}
              <Link className="hover:underline text-foreground" href={siteConfig.links.signUp}>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
  );
}
