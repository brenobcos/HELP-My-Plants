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
  error: FieldError | null | undefined;
  name: string;
  type?: string;
  icon: IconType;
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputComponentProps
> = ({ error = null, icon, type, name, ...rest }, ref) => {
  return (
    <InputGroup
      display="flex"
      flexDirection="column"
      w={["90%", "90%", "80%", "80%"]}
    >
      <Input
        name={name}
        ref={ref}
        type={type}
        {...rest}
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
      <Text color="red.700" fontSize="xs" h="10px">
        {error?.message}
      </Text>
    </InputGroup>
  );
};

export const InputComponent = forwardRef(InputBase);
