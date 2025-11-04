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
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">Book a free 30-minute product demo.</DialogTitle>
              <DialogDescription className="text-center">See our platform in action. Get your questions
                answered.</DialogDescription>
            </DialogHeader>
            <ContactForm>

            </ContactForm>
          </DialogContent>
        </form>
      </Dialog>
  )
}