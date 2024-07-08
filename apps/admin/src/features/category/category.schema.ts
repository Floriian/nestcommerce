import { z } from "zod";
import { productSchema } from "~features/product/product.schema";
import { baseEntity } from "~utils";

export const categorySchema = baseEntity.extend({
  active: z.boolean().default(true),
  image: z.any().optional(),
  url: z.string(),
  products: z.array(productSchema),
});

export const createOrEditCategorySchema = categorySchema.omit({
  products: true,
});

export type CreateOrEditCategoryDTO = z.infer<typeof categorySchema>;
export type Category = z.infer<typeof categorySchema>;
