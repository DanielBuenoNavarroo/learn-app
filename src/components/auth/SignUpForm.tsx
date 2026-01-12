"use client";

import { signUpSchema, signUpSchemaType } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { ArrowRight, Key, Loader2, Mail } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { signUp } from "@/lib/actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [processing, setProcessing] = useState(false);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const handleSubmit = async ({ email, name, password }: signUpSchemaType) => {
    try {
      setProcessing(true);
      const res = await signUp({ email, name, password });
      if (!res.success) {
        throw new Error(res.error);
      }

      toast.success("User created successfully");
      router.push("/");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected error occurred";

      toast.error(message);
    } finally {
      setProcessing(false);
    }
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-stone-600" />
                    Name
                    <span className="text-xs text-rose-500 ml-1">
                      (required)
                    </span>
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type="text"
                    {...field}
                    className="dark:bg-stone-950!"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-stone-600" />
                    Email
                    <span className="text-xs text-rose-500 ml-1">
                      (required)
                    </span>
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type="email"
                    {...field}
                    className="dark:bg-stone-950!"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center">
                    <Key className="w-4 h-4 mr-2 text-stone-600" />
                    Password
                    <span className="text-xs text-rose-500 ml-1">
                      (required)
                    </span>
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type="password"
                    {...field}
                    className="dark:bg-stone-950!"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-base transition-all! duration-200! group"
            disabled={processing}
          >
            {!processing && (
              <>
                <p>Register</p>
                <ArrowRight
                  strokeWidth={3}
                  className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-200"
                />
              </>
            )}
            {processing && <Loader2 className="animate-spin" />}
          </Button>
        </form>
      </Form>
      <Separator className="mt-8" />
      <div className="text-center text-sm pt-6">
        {"Already have an account? "}
        <Link
          href={"/sign-in"}
          className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-200"
        >
          Sign in
        </Link>
      </div>
    </>
  );
};

export default SignUpForm;
