import { db } from "../../../../database";
import type { MutationResolvers } from "./../../../types.generated";
export const createPost: NonNullable<MutationResolvers["createPost"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const { input } = arg;
  const result = await db
    .insertInto("posts")
    .values({ body: input.body })
    .returning(["id", "body", "createdAt", "updatedAt"])
    .executeTakeFirst();
  return { post: result };
};
