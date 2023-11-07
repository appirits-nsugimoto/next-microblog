"use client";

import { PropsWithChildren, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createPost } from "./actions";
import { Stack, Input, Button } from "@chakra-ui/react";

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
