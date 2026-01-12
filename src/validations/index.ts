import { z } from "zod";

const BASE_STRING_LENGTH = 3;
const BASE_PASS_LENGTH = 8;

export const signUpSchema = z.object({
  name: z.string().min(BASE_STRING_LENGTH),
  email: z.email(),
  password: z.string().min(BASE_PASS_LENGTH),
});

export type signUpSchemaType = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(BASE_PASS_LENGTH),
});

export type signInSchemaType = z.infer<typeof signInSchema>;
