import z from "zod";
import { baseEntity } from "~utils/base-entity.schema";

export const productSchema = baseEntity.extend({
  price: z.number(),
  active: z.boolean(),
  categoryId: z.string(),
  //category: categorySchema,
});

export type Product = z.infer<typeof productSchema>;
