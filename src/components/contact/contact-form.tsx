"use client";

import { z } from "zod";
import { Controller, useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button";
import { formSchema, FormData, COUNTRIES, ROLES } from "@/lib/contact-data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalCom } from "@/components/contact/cal-com";

export function ContactForm({setOpen}) {
  const formOptions: UseFormProps<FormData> = {
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      role: "",
      organisation: "",
    },
    mode: "onTouched"
  }

  const form = useForm<FormData>(formOptions);
  const formValues = form.watch(); // Watch all form values

  function onSubmit(data: z.infer<typeof formSchema>) {
    setOpen(false);
    toast("You submitted the following values:", {
      description: (
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius) + 4px)",
      } as React.CSSProperties,
    })
  }

  // Check if form is valid to enable Cal.com button
  const isFormValid = form.formState.isValid;

  return (
      <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FieldGroup>
          <div className="grid grid-cols-2 gap-4">
            <Controller
                name="firstName"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor="contact-form-firstName">First Name</FieldLabel>
                      <Input
                          {...field}
                          id="contact-form-firstName"
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter your first name"
                          autoComplete="given-name"
                      />
                      {fieldState.invalid && fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                    </Field>
                )}
            />

            <Controller
                name="lastName"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor="contact-form-lastName">Last Name</FieldLabel>
                      <Input
                          {...field}
                          id="contact-form-lastName"
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter your last name"
                          autoComplete="family-name"
                      />
                      {fieldState.invalid && fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                    </Field>
                )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor="contact-form-email">Email</FieldLabel>
                      <Input
                          {...field}
                          id="contact-form-email"
                          type="email"
                          aria-invalid={fieldState.invalid}
                          placeholder="your.email@example.com"
                          autoComplete="email"
                      />
                      {fieldState.invalid && fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                    </Field>
                )}
            />

            <Controller
                name="role"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor="contact-form-role">Role</FieldLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger id="contact-form-role" aria-invalid={fieldState.invalid} className="w-full">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          {ROLES.map((role) => (
                              <SelectItem key={role.value} value={role.value}>
                                {role.label}
                              </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                    </Field>
                )}
            />
          </div>

          <Controller
              name="country"
              control={form.control}
              render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="contact-form-country">Country</FieldLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="contact-form-country" aria-invalid={fieldState.invalid} className="w-full">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {COUNTRIES.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
              )}
          />

          <Controller
              name="organisation"
              control={form.control}
              render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="contact-form-organisation">Organization</FieldLabel>
                    <Input
                        {...field}
                        id="contact-form-organisation"
                        aria-invalid={fieldState.invalid}
                        placeholder="Organization / Club / Agency Name"
                        autoComplete="organization"
                    />
                    {fieldState.invalid && fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
              )}
          />
        </FieldGroup>

        <div className="flex gap-3 pt-2">
          <CalCom formData={formValues} isFormValid={isFormValid} />
        </div>
      </form>
  )
}