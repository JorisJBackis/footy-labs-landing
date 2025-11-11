import {PricingCards} from "@/components/pricing/pricing-cards";
import {plans} from "@/lib/plans";
import Link from "next/link";
import {siteConfig} from "@/lib/config";

export default function PricingPage() {
  return (
      <div className="container-wrapper">
        <div className="container flex flex-col gap-(--space-md) items-center">
          <div className=" max-w-2xl text-center flex flex-col gap-(--space-sm)">
            <h2 className="font-bold tracking-tight text-balance">Plans and Pricing</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Choose the plan that fits your role. Start with a free trial and upgrade anytime.
            </p>
          </div>

          <PricingCards plans={plans}/>

          {/*<div className=" text-center">*/}
          {/*  <p className="text-sm text-muted-foreground">*/}
          {/*    {`All plans include a 14-day free trial. `}*/}
          {/*    <Link className="hover:underline text-foreground" href={siteConfig.links.signUp}>Sign Up</Link>*/}
          {/*  </p>*/}
          {/*</div>*/}
        </div>
      </div>
  )
}
