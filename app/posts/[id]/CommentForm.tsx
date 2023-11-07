"use client";

import { PropsWithChildren, useRef } from "react";
import { createComment } from "./actions";
import { Button, Input, Stack } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";

type Props = {
  postId: number;
};
export const CommentForm = ({ postId }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const formAction = async (formData: FormData) => {
    await createComment(formData);
    formRef.current?.reset();
  };
  return (
    <form action={formAction} ref={formRef}>
      <input type="hidden" name="postId" value={postId} />
      <Stack spacing={2} direction="row">
        <Input name="body" required autoComplete="off" />
        <SubmitButton>コメント</SubmitButton>
      </Stack>
    </form>
  );
};

const SubmitButton = ({ children }: PropsWithChildren) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
};
