import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {ContactForm} from "@/components/contact/contact-form";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";



export function ContactDialog({children}) {

  return (
      <Dialog>
        <form>
          <DialogTrigger asChild>
            {children}
          </DialogTrigger>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle className="text-center"><h4>Book a free 30-minute product demo.</h4></DialogTitle>
              <DialogDescription className="text-center pt-(--space-sm) pb-(--space-md)">See our platform in action. Get your questions
                answered.</DialogDescription>
            </DialogHeader>
            <ContactForm>
            </ContactForm>
          </DialogContent>
        </form>
      </Dialog>
  )
}