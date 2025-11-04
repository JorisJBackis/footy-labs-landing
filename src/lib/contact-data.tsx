import {z} from "zod";

export const contactData = {
  socials: {
    instagram: {
      label: "Instagram",
      description: "Follow us for updates",
      href: "https://www.instagram.com/footylabs_official/"
    },
    linkedin: {
      label: "Linkedin",
      description: "Connect professionally",
      href: "https://www.linkedin.com/company/footylabs/"
    },
    facebook: {
      label: "Facebook",
      description: "Like our page",
      href: "https://www.facebook.com/people/Footy-Labs/61575324307648/"
    },
  },
  offices: {
    london: {
      title: "London Office",
      email: {
        label: "Email",
        href: "mailto:danius.jean@footylabs.ai",
        value: "danius.jean@footylabs.ai",
      },
      phone: {
        label: "Phone",
        href: "tel:+447563306704",
        value: "+44 7563 306 704",
      },
    },
    vilnius: {
      title: "Vilnius Office",
      email: {
        label: "Email",
        href: "mailto:vygantas.skestenis@footylabs.ai",
        value: "vygantas.skestenis@footylabs.ai",
      },
      phone: {
        label: "Phone",
        href: "tel:+37061290280",
        value: "+370 612 90 280",
      },
    },
  },
};

export const formSchema = z.object({
  firstName: z
      .string()
      .min(2, {message: "First name must be at least 2 characters"})
      .max(50, {message: "First name must be less than 50 characters"})
      .regex(/^[a-zA-Z\s'-]+$/, {
        message: "First name can only contain letters, spaces, hyphens, and apostrophes",
      }),
  lastName: z
      .string()
      .min(2, {message: "Last name must be at least 2 characters"})
      .max(50, {message: "Last name must be less than 50 characters"})
      .regex(/^[a-zA-Z\s'-]+$/, {
        message: "Last name can only contain letters, spaces, hyphens, and apostrophes",
      }),
  email: z
      .string()
      .min(1, {message: "Email is required"})
      .email({message: "Please enter a valid email address"})
      .toLowerCase(),
  country: z.string().min(1, {message: "Please select a country"}),
  role: z.string().min(1, {message: "Please select a role"}),
  organisation: z
      .string()
      .min(2, {message: "Organization name must be at least 2 characters"})
      .max(100, {message: "Organization name must be less than 100 characters"}),
})

export type FormData = z.infer<typeof formSchema>

export const COUNTRIES = [
  "Lithuania",
  "United Kingdom",
  "Denmark",
  "Finland",
  "Sweden",
  "Norway",
  "Estonia",
  "Latvia",
  "Poland",
  "Germany",
  "Netherlands",
  "Belgium",
  "France",
  "Spain",
  "Italy",
  "Portugal",
  "Czech Republic",
  "Austria",
  "Switzerland",
  "Ireland",
  "Brazil",
  "Other",
] as const;

export const ROLES = [
  {value: "player", label: "Player"},
  {value: "agent", label: "Agent"},
  {value: "club-representative", label: "Club Representative"},
  {value: "partner", label: "Partner"},
  {value: "other", label: "Other"},
] as const