import type { MutationResolvers } from "./../../../types.generated";
export const createPost: NonNullable<MutationResolvers["createPost"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Mutation.createPost resolver logic here */
  const now = new Date();
  return { post: { id: 1, body: "body", createdAt: now, updatedAt: now } };
};
