import { graphql } from "@/src/gql";
import { graphqlClient } from "@/src/graphql-client";
import { Box, Stack, Text } from "@chakra-ui/react";
import { Post } from "./Post";

const query = graphql(`
  query Posts {
    posts {
      edges {
        node {
          id
          ...PostListItem
        }
      }
    }
  }
`);

const fetchPosts = async () => {
  const result = await graphqlClient.request(query);
  return result.posts.edges.flatMap((edge) => edge.node).filter(notNull);
};

function notNull<T>(value: T | null): value is T {
  return value !== null;
}

export const Posts = async () => {
  const posts = await fetchPosts();
  if (posts.length === 0) {
    return (
      <Box>
        <Text>まだない</Text>
      </Box>
    );
  }
  return (
    <Stack spacing={4} direction="row" flexWrap="wrap">
      {posts.map((post) => (
        <Box key={post.id} width="fit-content" maxW="xs">
          <Post key={post.id} post={post} />
        </Box>
      ))}
    </Stack>
  );
};
