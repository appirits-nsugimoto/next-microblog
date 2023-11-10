import { Suspense } from "react";
import { Post } from "./Post";
import { Progress } from "@chakra-ui/react";

type Props = {
  params: { id: string };
};
export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<Progress isIndeterminate>loading...</Progress>}>
      <Post id={params.id} />
    </Suspense>
  );
}
