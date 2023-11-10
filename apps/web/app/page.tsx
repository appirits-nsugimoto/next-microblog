import { Suspense } from "react";
import { Posts } from "./Posts";
import { Heading, Progress, Stack } from "@chakra-ui/react";
import { PostForm } from "./PostForm";

export default function Home() {
  return (
    <Stack spacing={4} direction="column">
      <PostForm />
      <Suspense fallback={<Progress isIndeterminate>Loading...</Progress>}>
        <Posts />
      </Suspense>
    </Stack>
  );
}
