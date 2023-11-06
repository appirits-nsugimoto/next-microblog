import { Suspense } from "react";
import { PostsContainer } from "./PostsContainer";
import { Heading, Progress } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Heading>Posts</Heading>
      <Suspense fallback={<Progress>Loading...</Progress>}>
        <PostsContainer />
      </Suspense>
    </main>
  );
}
