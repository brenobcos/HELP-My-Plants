import { Flex, Input, InputProps, Text } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputComponentProps extends InputProps {
  placeholder: string;
  error: FieldError | null;
}

export function InputComponent({
  error,
  placeholder,
  ...rest
}: InputComponentProps) {
  return (
    <Flex flexDirection="column">
      <Input placeholder={placeholder} />
      <Text>{error?.message}</Text>
    </Flex>
  );
}
