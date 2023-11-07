"use server";

import { db } from "@/src/database";
import { revalidatePath } from "next/cache";

export const createComment = async (formData: FormData) => {
  const postId = formData.get("postId")?.toString();
  const body = formData.get("body")?.toString();
  if (!postId || !body) {
    return;
  }

  const result = await db
    .insertInto("comments")
    .values({ postId: Number(postId), body })
    .executeTakeFirst();
  revalidatePath(`/posts/${postId}`);
  console.debug("result", result);
};
