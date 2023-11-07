import { cursorToId } from "../../../../cursor";
import { db } from "../../../../database";
import type { QueryResolvers } from "./../../../types.generated";
export const comments: NonNullable<QueryResolvers["comments"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const limit = Math.min(arg.first, 32);
  const firstId = cursorToId(arg?.after);
  const comments = await db
    .selectFrom("comments")
    .select([
      "comments.id",
      "comments.body",
      "comments.createdAt",
      "comments.updatedAt",
    ])
    .where("postId", "=", Number(arg.postId))
    .$if(firstId != null, (q) => q.where("id", "<", Number(firstId)))
    .limit(limit + 1) // +1 to check if there is a next page
    .orderBy("comments.id desc")
    .execute();

  return {
    comments: comments.slice(0, limit),
    hasNextPage: comments.length > limit,
  };
};
