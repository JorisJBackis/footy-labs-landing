import {PricingCards} from "@/components/pricing/page";
import {plans} from "@/lib/plans";
import Link from "next/link";
import {siteConfig} from "@/lib/config";

export default function PricingPage() {
  return (
      <div className="container-wrapper">

        <div className="container">
          <div className="mx-auto">
            {/* Header */}
            <div className="mx-auto max-w-2xl text-center mb-(--space-xl)">
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl mb-4">Plans and Pricing</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Choose the plan that fits your role. Start with a free trial and upgrade anytime.
              </p>
            </div>

            {/* Pricing Cards */}
            <PricingCards plans={plans}/>

            {/* Footer Note */}
            <div className="mt-(--space-xl) text-center">
              <p className="text-sm text-muted-foreground ">
                {`All plans include a 14-day free trial. `}
                <Link className="hover:underline text-foreground" href={siteConfig.links.signUp}>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
