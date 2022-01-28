import {
  InputGroup,
  Input,
  InputProps,
  Text,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputComponentProps extends InputProps {
  placeholder: string;
  error: FieldError | null | undefined;
  type?: string;
  icon: IconType;
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputComponentProps
> = ({ error = null, placeholder, icon, type, ...rest }, ref) => {
  return (
    <InputGroup display="flex" flexDirection="column">
      <Input
        {...rest}
        placeholder={placeholder}
        _placeholder={{ color: "green.100", fontWeight: "medium" }}
        backgroundColor="green.800"
        border="none"
        color="green.100"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        focusBorderColor="green.400"
        height="45px"
      />
      <InputRightElement>
        <Icon as={icon} color="green.100" height="24px" width="24px" />
      </InputRightElement>
      <Text color="red.400" fontSize="xs" paddingTop="5px" margin="0px">
        {error?.message}
      </Text>
    </InputGroup>
  );
};

export const InputComponent = forwardRef(InputBase);
