import { db } from "../../../../database";
import type { QueryResolvers } from "./../../../types.generated";
export const post: NonNullable<QueryResolvers["post"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const post = await db
    .selectFrom("posts")
    .select(["posts.id", "posts.body", "posts.createdAt", "posts.updatedAt"])
    .where("id", "=", Number(arg.id))
    .executeTakeFirst();
  return post;
};
