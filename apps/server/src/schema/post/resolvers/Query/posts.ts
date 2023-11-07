import { cursorToId } from "../../../../cursor";
import { db } from "../../../../database";
import type { QueryResolvers } from "./../../../types.generated";
export const posts: NonNullable<QueryResolvers["posts"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const limit = Math.min(arg.first, 32);
  const firstId = cursorToId(arg?.after);
  const posts = await db
    .selectFrom("posts")
    .select(["posts.id", "posts.body", "posts.createdAt", "posts.updatedAt"])
    .limit(limit + 1) // +1 to check if there is a next page
    .$if(firstId != null, (q) => q.where("id", "<", Number(firstId)))
    .orderBy("posts.id desc")
    .execute();

  return {
    posts: posts.slice(0, limit),
    hasNextPage: posts.length > limit,
  };
};
