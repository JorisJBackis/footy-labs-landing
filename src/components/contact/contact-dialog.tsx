"use client"
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
import {useState} from "react";



export function ContactDialog({children} : { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <form>
          <DialogTrigger asChild>
            {children}
          </DialogTrigger>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle asChild>
              <h4 className="text-center leading-9">Book a free 30-minute product demo.</h4>
              </DialogTitle>
              <DialogDescription className="text-center pt-(--space-sm) pb-(--space-md)">See our platform in action. Get your questions
                answered.</DialogDescription>
            </DialogHeader>
            <ContactForm setOpen={setOpen}>
            </ContactForm>
          </DialogContent>
        </form>
      </Dialog>
  )
}