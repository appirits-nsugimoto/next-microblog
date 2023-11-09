"use server";

import { graphql } from "@/src/gql";
import { graphqlClient } from "@/src/graphql-client";
import { revalidatePath } from "next/cache";

const query = graphql(`
  mutation createComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      comment {
        id
      }
    }
  }
`);

export const createComment = async (formData: FormData) => {
  const postId = formData.get("postId")?.toString();
  const body = formData.get("body")?.toString();
  if (!postId || !body) {
    return;
  }

  const result = await graphqlClient.request(query, {
    input: { postId, body },
  });
  revalidatePath(`/posts/${postId}`);
  console.debug("result", result);
};
