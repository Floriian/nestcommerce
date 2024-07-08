import { z } from "zod";

export const baseEntity = z.object({
  _id: z.string().nullable(),
  name: z.string().nullable(),
  createdAt: z.date().default(new Date()).nullable(),
  updatedAt: z.date().default(new Date()).nullable(),
});

export type BaseEntity = z.infer<typeof baseEntity>;
