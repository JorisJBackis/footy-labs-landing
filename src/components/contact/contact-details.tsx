import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";
import {FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon} from "lucide-react";
import Link from "next/link";
import {Copy} from "@/components/contact/copy";
import {contactData} from "@/lib/contact-data";


export function ContactDetails() {
  return (
      <div className="flex flex-col gap-(--space-sm)">
        <h2 className="text-center">Or contact us using details below</h2>
        <div className="flex flex-col sm:flex-row gap-(--space-md)">
          <ContactCards/>
          <div className="basis-1/2">
            <Card className="h-full">
              <CardTitle className="px-6">Social</CardTitle>
              <CardContent className="flex flex-col gap-4">
                <Link href={contactData.socials.instagram.href} className="flex gap-2">
                  <InstagramIcon/>
                  {contactData.socials.instagram.label}
                </Link>
                <Link href={contactData.socials.facebook.href} className="flex gap-2">
                  <FacebookIcon/>
                  {contactData.socials.facebook.label}
                </Link>
                <Link href={contactData.socials.linkedin.href} className="flex gap-2">
                  <LinkedinIcon/>
                  {contactData.socials.linkedin.label}
                </Link>
              </CardContent>
              <CardFooter className="mt-auto">Let's connect!</CardFooter>

            </Card>
          </div>
        </div>
      </div>
  )
}

function ContactCards() {
  return (
      <div className="flex flex-col gap-(--space-md) basis-1/2">
        {Object.values(contactData.offices).map(({title, email, phone}, index) => (
            <Card key={index}>
              <CardTitle className="px-6">{title}</CardTitle>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center justify-center gap-4 group">
                    <div
                        className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <MailIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors"/>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground ">{email.label}</span>
                      <a target="_blank" className="font-medium break-all hover:underline"
                         href={email.href}>{email.value}</a>
                    </div>
                  </div>
                  <Copy
                      className="p-2 rounded-lg text-muted-foreground bg-muted ml-auto flex hover:text-primary transition-colors"
                      textToCopy={""}>
                    {/*<span className="mr-1 sm:block hidden text-sm">Copy</span>*/}
                  </Copy>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center justify-center gap-4 group">
                    <div
                        className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <PhoneIcon
                          className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors"/>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground ">{phone.label}</span>
                      <a target="_blank" className="font-medium break-all hover:underline"
                         href={phone.href}>{phone.value}</a>
                    </div>
                  </div>
                  <Copy
                      className="p-2 rounded-lg text-muted-foreground bg-muted ml-auto flex hover:text-primary transition-colors"
                      textToCopy={"test"}>
                    {/*<span className="mr-1 sm:block hidden text-sm">Copy</span>*/}
                  </Copy>
                </div>
              </CardContent>
            </Card>
        ))
        }
      </div>
  )
}