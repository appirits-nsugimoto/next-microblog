import { db } from "../../../../database";
import type { MutationResolvers } from "./../../../types.generated";
export const createComment: NonNullable<
  MutationResolvers["createComment"]
> = async (_parent, arg, _ctx) => {
  const { input } = arg;
  const result = await db
    .insertInto("comments")
    .values({ body: input.body, postId: Number(input.postId) })
    .returning(["id", "body", "createdAt", "updatedAt"])
    .executeTakeFirst();
  return { comment: result };
};
