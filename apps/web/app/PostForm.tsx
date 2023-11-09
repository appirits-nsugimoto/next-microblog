"use client";

import { Button, Input, Stack } from "@chakra-ui/react";
import { PropsWithChildren, useRef } from "react";
import { useFormStatus } from "react-dom";
import { createPost } from "./actions";

export const PostForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const formAction = async (formData: FormData) => {
    await createPost(formData);
    formRef.current?.reset();
  };
  return (
    <form action={formAction} ref={formRef}>
      <Stack spacing={2} direction="row">
        <Input
          name="body"
          placeholder="いまなにしてる？"
          required
          autoComplete="off"
        />
        <SubmitButton>レッツゴ</SubmitButton>
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
