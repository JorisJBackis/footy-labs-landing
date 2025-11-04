import {UnderDevelopment} from "@/components/under-development";
import sections from "@/components/home/hero/hero.module.scss";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {ContactDetails} from "@/components/contact/contact-details";
import {ContactDialog} from "@/components/contact/contact-dialog";
import {CalCom} from "@/components/contact/cal-com";

export default function ContactPage() {
  return (
      <div className="container-wrapper">
        <div className="container flex flex-col gap-(--space-xl)">
          {/* Contact-hero */}
          <div className="flex flex-col gap-(--space-md)">
            <div className="flex flex-col justify-center items-center">
              <h1>Contact us</h1>
              <p className="text-center max-w-[37.5rem]">Contact us if you’re a club looking to discover and manage top
                talent, an agent
                aiming to expand your
                network and streamline operations, or a player seeking better career opportunities and exposure. You can
                also reach out if you’re interested in becoming a partner and growing with us.</p>
            </div>
            <div className="flex gap-(--space-sm) justify-center items-center flex-col sm:flex-row">
              <ContactDialog>
                <Button variant="default"
                        className="h-12"
                >
                  Get a free 30 minute demo
                </Button>
              </ContactDialog>
              <ContactDialog>
              <Button variant="outline"
                      className="h-12"
              >
                Explore Partnership
              </Button>
            </ContactDialog>

            </div>
          </div>
          {/* Cards with contact details */}
          <ContactDetails/>
        </div>
      </div>
  );
}
