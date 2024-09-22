"use server";

import { z } from "zod";
import validator from "validator";
const phoneSchema = z.string().trim().refine(validator.isMobilePhone);

// coerce => user가 입력한 string을 number로 변환한다.
const tokenSchema = z.coerce.number().min(100000).max(999999);

export async function smsVerification(prevState: any, formData: FormData) {
  console.log(typeof formData.get("token"));
  console.log(typeof tokenSchema.parse(formData.get("token")));
}
