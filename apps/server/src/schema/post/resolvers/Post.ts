import { cursorToId } from "../../../cursor";
import { db } from "../../../database";
import type { PostResolvers } from "./../../types.generated";
export const Post: PostResolvers = {
  /* Implement Post resolver logic here */
  comments: async (parent, arg) => {
    const limit = Math.min(arg?.first ?? Infinity, 32);
    const firstId = cursorToId(arg?.after);
    const comments = await db
      .selectFrom("comments")
      .select([
        "comments.id",
        "comments.body",
        "comments.createdAt",
        "comments.updatedAt",
      ])
      .where("postId", "=", parent.id)
      .limit(limit + 1)
      .$if(firstId != null, (q) => q.where("id", ">", Number(firstId)))
      .execute();
    return {
      comments: comments.slice(0, limit),
      hasNextPage: comments.length > limit,
    };
  },
};
