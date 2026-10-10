import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  company: z.string().min(2, "Company name must be at least 2 characters").max(120, "Company name is too long"),
  email: z.string().email("Please enter a valid work email address"),
  phone: z.string().max(30, "Phone number is too long").optional().or(z.literal("")),
  serviceNeeded: z.enum([
    "AI Engineering & Generative AI",
    "Intelligent Workflow Automation",
    "Custom Software & Full-Stack",
    "Data Engineering & Analytics",
    "Machine Learning Operations (MLOps)",
    "Cloud Infrastructure & DevOps",
    "Other Technology Transformation"
  ]),
  budget: z.enum([
    "Under ₹5L",
    "₹5L - ₹15L",
    "₹15L - ₹40L",
    "₹40L+",
    "Flexible / Exploring"
  ]).optional(),
  timeline: z.enum([
    "Immediate (< 1 month)",
    "1 - 3 months",
    "3 - 6 months",
    "Flexible / Planning phase"
  ]).optional(),
  message: z.string().min(10, "Please describe your business problem in at least 10 characters").max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
