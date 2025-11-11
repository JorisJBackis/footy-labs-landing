import {UnderDevelopment} from "@/components/under-development";
import {Bento} from "@/components/home/bento/bento";
import {PricingCards} from "@/components/pricing/pricing-cards";
import {plans} from "@/lib/plans";
import {siteConfig} from "@/lib/config";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ContactDialog} from "@/components/contact/contact-dialog";

export default function ProductPage() {
  return (
      <div className="container-wrapper flex flex-col gap-(--space-xl)">
        <div className="container flex flex-col gap-(--space-md)">
          <h1 className="text-center">Built for every side of the game.</h1>
          <Bento bentoUniqueId={"product-page"}/>

        </div>

        <div className="container flex flex-col gap-(--space-md) items-center">
          <div className=" max-w-2xl text-center flex flex-col gap-(--space-sm)">
            <h2 className="font-bold tracking-tight text-balance">Flexible plans and prices for everyone</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Plans start from €99. Choose the plan that fits your role.
            </p>
            <div className="flex flex-col sm:flex-row gap-(--space-md) justify-center items-center">
          <Link href={"/pricing"} >
            <Button className="w-48">See pricing</Button>
          </Link>
            <ContactDialog>
              <Button className="w-48" variant="outline">
                Request Free Trial
              </Button>
            </ContactDialog>
            </div>
          </div>

          {/*/!*<PricingCards plans={plans}/>*!/*/}

          {/*<div className=" text-center">*/}
          {/*  <p className="text-sm text-muted-foreground">*/}
          {/*    {`All plans include a 14-day free trial. `}*/}
          {/*    <Link className="hover:underline text-foreground" href={siteConfig.links.signUp}>Sign Up</Link>*/}
          {/*  </p>*/}
          {/*</div>*/}
        </div>
      </div>
  );
}
