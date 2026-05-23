"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Form Schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50),
  email: z.email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export const HomeContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      console.log("Form Data:", data);

      const response = await fetch(
        "https://formsubmit.co/ajax/4958a03dc07c0ed44bb9764d3d4a7380",
        {
          method: "POST", // Specify the method
          headers: {
            "Content-Type": "application/json", // Tell the server we are sending JSON
            Accept: "application/json",
          },
          body: JSON.stringify(data), // The actual data being sent
        },
      );
      const result = await response.json();
      console.log("Response: ", result);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="xl:p-10 pb-10">
      <h2 className="text-3xl font-medium pb-4">Send us a message</h2>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
              className="my-2 rounded-md"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              className="my-2 rounded-md"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your new idea"
            {...register("message")}
            aria-invalid={errors.message ? "true" : "false"}
            className="my-2 min-h-[150px] rounded-md"
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-primary py-4 xl:py-5 text-lg font-medium hover:bg-purple-700"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};
