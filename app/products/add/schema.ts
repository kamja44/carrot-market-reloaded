import { z } from "zod";

export const productSchema = z.object({
  photo: z.string({
    required_error: "Photo is required",
  }),
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  price: z.coerce.number({
    required_error: "Price is required",
  }),
});

// zod의 infer를 이용하여 schema의 타입을 반환할 수 있다.
export type ProductType = z.infer<typeof productSchema>;
