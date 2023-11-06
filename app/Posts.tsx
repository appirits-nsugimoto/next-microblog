import { Card, CardBody, Stack, Text, VStack } from "@chakra-ui/react";

type Post = {
  id: number;
  body: string;
  createdAt: Date;
};
type Props = {
  posts: Post[];
};
export const Posts = ({ posts }: Props) => {
  return (
    <Stack spacing={4} direction="column">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Stack>
  );
};

const Post = ({ post }: { post: Post }) => {
  return (
    <Card>
      <CardBody>
        <Text>{post.body}</Text>
      </CardBody>
    </Card>
  );
};
