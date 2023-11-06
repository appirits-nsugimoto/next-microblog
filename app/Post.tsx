import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

type Post = {
  id: number;
  body: string;
  createdAt: Date;
  commentCount: number;
};
type Props = {
  post: Post;
};

export const Post = ({ post }: Props) => {
  return (
    <Card>
      <CardBody>
        <Text>{post.body}</Text>
      </CardBody>
      <CardFooter>
        <Stack spacing={2} direction="row">
          <Text>{post.createdAt.toISOString()}</Text>
          <Text>{post.commentCount} comments</Text>
        </Stack>
      </CardFooter>
    </Card>
  );
};
