import {UnderDevelopment} from "@/components/under-development";
import sections from "@/components/home/hero/hero.module.scss";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {ContactDetails} from "@/components/contact/contact-details";

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
            <div className="flex gap-(--space-sm) justify-center items-center">
              <Button variant="default"
                      className="h-12"
                  // onClick={() => {
                  //   toast.message("Book a demo is under development")
                  // }}
              >
                Get a free 30 minute demo
              </Button>
              <Button variant="outline"
                      className="h-12"
                  // onClick={() => {
                  //   toast.message("Book a demo is under development")
                  // }}
              >
                Speak to a founder
              </Button>
            </div>
          </div>
          {/* Cards with contact details */}
          <ContactDetails/>
        </div>
      </div>
  );
}
