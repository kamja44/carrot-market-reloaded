"use server";
import { z } from "zod";

const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);

const checkUsername = (username: string) => !username.includes("potato");
const checkPasswords = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "이름은 문자로 작성되어야 합니다.",
        required_error: "이름은 필수로 입력해야 합니다.",
      })
      .min(3, "이름이 너무 짧아요 !")
      .max(10, "이름이 너무 길어요 !")
      .toLowerCase()
      .trim()
      .refine(checkUsername, "No potatoes allowed"),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(4)
      .regex(
        passwordRegex,
        "A password must have lowercase, UPPERCASE, a number and special characters"
      ),
    confirmPassword: z.string().min(4),
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same",
    path: ["confirmPassword"],
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
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
