"use server";

import { db } from "@/src/database";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData) => {
  const body = formData.get("body")?.toString();
  if (!body) {
    // TODO: validation
    return;
  }
  const result = await db
    .insertInto("posts")
    .values({ body })
    .executeTakeFirst();
  revalidatePath("/");
  console.debug("result", result);
};
