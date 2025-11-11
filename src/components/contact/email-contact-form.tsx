"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm, type UseFormProps } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { useEffect } from "react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Please enter a valid email address." })
      .toLowerCase(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type FormData = z.infer<typeof formSchema>

const STORAGE_KEY = "email-contact-form-draft"

export function EmailContactForm() {
  const getSavedFormData = (): Partial<FormData> => {
    if (typeof window === "undefined") return {}
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  }

  const formOptions: UseFormProps<FormData> = {
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      ...getSavedFormData(),
    },
  }

  const form = useForm<FormData>(formOptions)

  useEffect(() => {
    const subscription = form.watch((value) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
      }
    })
    return () => subscription.unsubscribe()
  }, [form])

  function onSubmit(values: FormData) {
    console.log(values)
    toast("Message sent!", {
      description: "We'll get back to you as soon as possible.",
      position: "bottom-right",
    })
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY)
    }
    form.reset()
  }

  return (
      <form id="email-contact-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FieldGroup>
          <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="email-contact-form-name">Name</FieldLabel>
                    <Input {...field} id="email-contact-form-name" aria-invalid={fieldState.invalid} placeholder="John Doe" />
                    {fieldState.invalid && fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
              )}
          />

          <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="email-contact-form-email">Email</FieldLabel>
                    <Input
                        {...field}
                        id="email-contact-form-email"
                        type="email"
                        aria-invalid={fieldState.invalid}
                        placeholder="john@example.com"
                    />
                    {fieldState.invalid && fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
              )}
          />

          <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="email-contact-form-message">Message</FieldLabel>
                    <Textarea
                        {...field}
                        id="email-contact-form-message"
                        aria-invalid={fieldState.invalid}
                        placeholder="Tell us how we can help you..."
                        className="min-h-[120px]"
                    />
                    {fieldState.invalid && fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
              )}
          />
        </FieldGroup>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
  )
}
