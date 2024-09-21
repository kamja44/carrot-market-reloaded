"use server";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(3).max(10),
  email: z.string().email(),
  password: z.string().min(10),
  confirmPassword: z.string().min(10),
});

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  // formSchema.parse(data); 에러 반환
  const result = formSchema.safeParse(data); // 에러 반환 x
  if (!result.success) {
    return result.error.flatten();
  }
}
