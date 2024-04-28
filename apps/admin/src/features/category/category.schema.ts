import { z } from "zod";

export const categorySchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  active: z.boolean().default(true),
});

export type Category = z.infer<typeof categorySchema>;
