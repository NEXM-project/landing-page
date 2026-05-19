"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

// Form Schema
const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50),
  email: z.email({ message: "Please enter a valid email address" }),
  projectType: z.string().min(1, { message: "Please select a project type" }),
  projectDetails: z
    .string()
    .min(10, { message: "Project details must be at least 10 characters" })
    .max(1000),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const projectTypeOptions = [
  { value: "ai-saas-mvp", label: "AI / SaaS MVP" },
  { value: "web-app", label: "Web Application" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "consulting", label: "Consulting" },
  { value: "other", label: "Other" },
];

export const HomeContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const projectType = watch("projectType");

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      console.log("Form Data:", data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            {...register("firstName")}
            aria-invalid={errors.firstName ? "true" : "false"}
            className="h-10 bg-[#F8F9FB] rounded-md"
          />
          {errors.firstName && (
            <p className="text-sm text-destructive">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            {...register("lastName")}
            aria-invalid={errors.lastName ? "true" : "false"}
            className="h-10 bg-[#F8F9FB] rounded-md"
          />
          {errors.lastName && (
            <p className="text-sm text-destructive">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Work Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Work Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@company.com"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
          className="h-10 bg-[#F8F9FB] rounded-md"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Project Type */}
      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type</Label>
        <Select
          value={projectType}
          onValueChange={(value) => setValue("projectType", value)}
        >
          <SelectTrigger
            id="projectType"
            aria-invalid={errors.projectType ? "true" : "false"}
            className="w-full h-10! bg-[#F8F9FB] rounded-md py-0"
          >
            <SelectValue placeholder="Select a project type" />
          </SelectTrigger>
          <SelectContent className="">
            {projectTypeOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="h-10!"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.projectType && (
          <p className="text-sm text-destructive">
            {errors.projectType.message}
          </p>
        )}
      </div>

      {/* Project Details */}
      <div className="space-y-2">
        <Label htmlFor="projectDetails">Project Details</Label>
        <Textarea
          id="projectDetails"
          placeholder="Tell us more about your project..."
          {...register("projectDetails")}
          aria-invalid={errors.projectDetails ? "true" : "false"}
          className="h-10 bg-[#F8F9FB] rounded-md"
        />
        {errors.projectDetails && (
          <p className="text-sm text-destructive">
            {errors.projectDetails.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary py-3 lg:py-8 text-lg font-medium hover:bg-purple-700"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  );
};
