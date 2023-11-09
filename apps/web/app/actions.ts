"use server";

import { graphql } from "@/src/gql";
import { graphqlClient } from "@/src/graphql-client";
import { revalidatePath } from "next/cache";

const query = graphql(`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      post {
        id
      }
    }
  }
`);

export const createPost = async (formData: FormData) => {
  const body = formData.get("body")?.toString();
  if (!body) {
    return;
  }
  const result = await graphqlClient.request(query, { input: { body } });
  revalidatePath("/");
  console.debug("result", result);
};
