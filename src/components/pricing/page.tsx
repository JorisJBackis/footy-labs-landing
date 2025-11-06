import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Check} from "lucide-react";
import {ContactDialog} from "@/components/contact/contact-dialog";
import {Button} from "@/components/ui/button";

export function PricingCards({plans}) {
  return (
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
        {plans.map((plan) => (
            <Card
                key={plan.name}
                className={`relative flex flex-col ${plan.recommended ? "border-primary shadow-lg" : ""}`}
            >
              {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                      className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </span>
                  </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-primary mt-0.5"/>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <ContactDialog>
                  <Button className="w-full" variant={plan.recommended ? "default" : "outline"} size="lg">
                    Request Free Trial
                  </Button>
                </ContactDialog>
              </CardFooter>
            </Card>
        ))}
      </div>
  )
}