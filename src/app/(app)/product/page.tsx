import {UnderDevelopment} from "@/components/under-development";
import {Bento} from "@/components/home/bento/bento";
import {PricingCards} from "@/components/pricing/pricing-cards";
import {plans} from "@/lib/plans";
import {siteConfig} from "@/lib/config";
import Link from "next/link";

export default function ProductPage() {
  return (
      <div className="container-wrapper flex flex-col gap-(--space-xl)">
        <div className="container flex flex-col gap-(--space-md)">
          <h1 className="text-center">Footy Labs - a platform for everyone involved in football</h1>
          <Bento bentoUniqueId={"product-page"}/>

        </div>
        <div className="container flex flex-col gap-(--space-md) items-center">
          <div className=" max-w-2xl text-center flex flex-col gap-(--space-sm)">
            <h2 className="font-bold tracking-tight text-balance">Plans and Pricing</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Choose the plan that fits your role. Start with a free trial and upgrade anytime.
            </p>
          </div>

          <PricingCards plans={plans}/>

          <div className=" text-center">
            <p className="text-sm text-muted-foreground">
              {`All plans include a 14-day free trial. `}
              <Link className="hover:underline text-foreground" href={siteConfig.links.signUp}>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
  );
}
